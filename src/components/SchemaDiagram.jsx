import { useEffect, useState } from "react";
import mermaid from "mermaid";
import Magnifier from "react-magnifier";

// Mermaid measures edge-label text width live on the page (where the "Outfit" web font
// is loaded) and bakes that exact width into each label's <foreignObject>. Chromium clips
// foreignObject content to its declared width by default. Once this SVG is serialized into
// a standalone data: URI <img>, that isolated resource context can't see the host page's
// web fonts, so it falls back to a substitute font that renders slightly wider - just
// enough to clip the last glyph of longer labels (e.g. "id = uid" -> "id = uic"). Widening
// each edge-label foreignObject with a safety margin (and re-centering it) prevents that
// clipping regardless of which fallback font the isolated image ends up using.
const widenEdgeLabels = (svgString) => {
        const doc = new DOMParser().parseFromString(svgString, "image/svg+xml");
        const labels = doc.querySelectorAll("g.edgeLabel > g.label");
        labels.forEach((labelG) => {
                const fo = labelG.querySelector("foreignObject");
                if (!fo) return;
                const width = parseFloat(fo.getAttribute("width"));
                if (!width) return;
                const newWidth = width * 1.3 + 12;
                fo.setAttribute("width", newWidth);
                // The inner div is "display: table-cell", which shrink-wraps to its text
                // instead of filling the foreignObject - so widening the foreignObject alone
                // just adds invisible empty space and the text stays left-anchored instead of
                // centering on the line. Force the div to the full new width so its own
                // text-align: center actually has something to center within.
                const innerDiv = fo.querySelector("div");
                if (innerDiv) {
                        // Mermaid's own inline style caps these at max-width: 200px, which silently
                        // wins over an explicit wider `width` and re-truncates/off-centers longer
                        // labels (e.g. "code = university_code" needs ~220px) - override it too.
                        innerDiv.setAttribute(
                                "style",
                                `${innerDiv.getAttribute("style") || ""};width:${newWidth}px;max-width:${newWidth}px;`
                        );
                }
                const transform = labelG.getAttribute("transform") || "";
                const match = transform.match(/translate\(([-\d.]+),\s*([-\d.]+)\)/);
                const y = match ? match[2] : "-12";
                labelG.setAttribute("transform", `translate(${-newWidth / 2}, ${y})`);
        });
        return new XMLSerializer().serializeToString(doc);
};

export const SchemaDiagram = ({ definition, isDarkMode }) => {
        const [svgDataUri, setSvgDataUri] = useState(null);

        useEffect(() => {
                let cancelled = false;
                const renderId = `schema-diagram-${Math.random().toString(36).slice(2)}`;

                const run = async () => {
                        // Mermaid measures text width (to size edge-label background boxes, etc.)
                        // using whatever font is active at render time. If the custom "Outfit" web
                        // font hasn't finished loading yet, it measures with a narrower fallback,
                        // then paints the wider real font afterward - clipping label text against
                        // an undersized box (e.g. "id = uid" rendering as "id = uic"). Waiting for
                        // document.fonts.ready guarantees the real font is used for measurement too.
                        if (document.fonts?.ready) {
                                await document.fonts.ready;
                        }
                        if (cancelled) return;

                        // The rendered SVG gets serialized into a data: URI and loaded via <img> (so
                        // react-magnifier can zoom it), and an <img>'s resource context can't see the
                        // host page's CSS custom properties at all. Any hsl(var(--token)) reference,
                        // and even keywords like "transparent" fed through Mermaid's internal color
                        // math (khroma), silently fail to resolve. So we read the real palette values
                        // off the live DOM here and bake them in as literal hsl(...) strings.
                        const style = getComputedStyle(document.documentElement);
                        const resolve = (name) => {
                                const raw = style.getPropertyValue(name).trim();
                                return `hsl(${raw.split(/\s+/).join(", ")})`;
                        };
                        const colors = {
                                foreground: resolve("--foreground"),
                                mutedForeground: resolve("--muted-foreground"),
                                primary: resolve("--primary"),
                                border: resolve("--border"),
                                card: resolve("--card"),
                                cardAlt: resolve("--card-alt"),
                        };

                        mermaid.initialize({
                                startOnLoad: false,
                                theme: isDarkMode ? "dark" : "default",
                                securityLevel: "loose",
                                flowchart: {
                                        htmlLabels: true,
                                        curve: "basis",
                                },
                                themeVariables: {
                                        primaryColor: colors.card,
                                        primaryBorderColor: colors.border,
                                        lineColor: colors.primary,
                                        edgeLabelBackground: colors.cardAlt,
                                        textColor: colors.foreground,
                                        fontFamily: "Outfit, sans-serif",
                                },
                        });

                        const diagramText = typeof definition === "function" ? definition(colors) : definition;

                        try {
                                const { svg } = await mermaid.render(renderId, diagramText);
                                if (cancelled) return;
                                const widenedSvg = widenEdgeLabels(svg);
                                const encoded = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(widenedSvg)))}`;
                                setSvgDataUri(encoded);
                        } catch (err) {
                                console.error("Mermaid render error:", err);
                        }
                };

                run();

                return () => {
                        cancelled = true;
                };
        }, [definition, isDarkMode]);

        if (!svgDataUri) {
                return <div className="py-8 text-center text-sm text-muted-foreground">Loading diagram…</div>;
        }

        return (
                <div className="flex justify-center py-4">
                        <Magnifier
                                src={svgDataUri}
                                mgWidth={250}
                                mgHeight={250}
                                zoomFactor={.5}
                                mgShape="square"
                                className="w-full"
                        />
                </div>
        );
};
