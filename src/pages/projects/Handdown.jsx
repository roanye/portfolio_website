import { ParticleBackground } from "@/components/ParticleBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MoveRight, ArrowDown } from "lucide-react";
import { SiReact, SiPython, SiFastapi, SiFirebase, SiGmail } from "react-icons/si";
import { useEffect } from "react";

export const Handdown = () => {
  // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background effects */}
      <ParticleBackground />

      {/* Hero */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center pt-20 pb-8 px-4"
      >
        <div className="text-center z-10 space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold opacity-0 animate-fade-in">
            <span className="text-primary">Handdown</span>
          </h1>
          <p className="text-muted-foreground text-lg opacity-0 animate-fade-in-delay-1">
            A campus-based marketplace where college students buy, sell, and borrow hand-me-downs from each other.
          </p>
        </div>

        <a
          href="https://github.com/roanye/HandDown/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button whitespace-nowrap mt-6"
        >
          GitHub Repo
        </a>

        <a
          href="#about"
          className="flex flex-col items-center gap-1 animate-bounce mt-6"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </a>
      </section>

      <section id="about" className="py-12 px-4 relative">
        <div className="w-full bg-background/65 rounded-lg p-4 md:p-6">
                <div className="flex flex-col gap-6">
                  <div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Info */}
                    <div className="gradient-border space-y-6 p-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>
                        
                        <div className="space-y-4 text-left">
                          <div>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Team Size:</span> 4 people (shoutout Ian Ryan, Mateo Sufuentes, Patrick Yeh)
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Project Timeline:</span> Sept 2024 - Sept 2025
                            </p>
                            <p className="text-muted-foreground">
                              <span className="text-primary font-semibold">Skills:</span> Python, FastAPI, Firebase (Firestore &amp; Storage), Supabase (Postgres), SQL, Docker, Git
                            </p>
                          </div>

                          <p className="text-muted-foreground">
                            Handdown started as my senior capstone at Tufts and became a side project I picked 
                            back up with my brother after graduating. It grew out of something my group 
                            saw every year. Each May, dumpsters around campus overflowed with lightly used items, 
                            and furniture sat on sidewalks until the rain ruined it. Each September, students 
                            furnished their rooms by paying for new things or turning to Facebook Marketplace and 
                            similar apps, where most sellers weren't students and buying used often meant meeting 
                            strangers off campus.
                          </p>
                          <p className="text-muted-foreground">
                            There was plenty of supply and plenty of demand on the same campus. They just 
                            weren't connected, and the result was waste every year. The best version of 
                            this already existed informally: getting hand-me-downs from upperclassmen 
                            friends who'd been through it and knew what you'd need. Handdown scales that 
                            up, giving every Tufts student a trusted, campus-only place to pass their things 
                            down to the people who need them next.
                          </p>
                          <p className="text-muted-foreground">
                            We started with market research. The obvious comparisons were Facebook Marketplace,
                            OfferUp, Craigslist, and Nextdoor. Then we looked at a category of apps college
                            students were already hooked on: dating apps. Any marketplace needs a standard search,
                            but we had freedom in how users explore listings, so we took inspiration from Tinder and
                            built a swipe feed. Search works when you know exactly what you want; it's easy to filter
                            for couches if you need a couch. For students who just want to browse, though, a crowded
                            results page invites decision paralysis. The swipe feed shows one listing at a time with
                            only a few things you can do with it.
                          </p>
                          <p className="text-muted-foreground">
                            Every post covers both sides of the exchange: a <span className="text-foreground font-medium">Listing</span> can
                            be posted to lend or sell, while a <span className="text-foreground font-medium">Request</span> can be posted to
                            borrow or buy. The recommendation algorithm deliberately interleaves listings and
                            requests in the swipe feed at a tunable ratio, so the feed surfaces both supply and
                            demand instead of just one side of the marketplace.
                          </p>
                          {/* Separator Line */}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6"/>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Team &amp; Roles</h3>

                        <div className="space-y-4 text-left">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="border-b border-primary/30">
                                  <th className="py-2 pr-4 text-primary font-semibold whitespace-nowrap">Name</th>
                                  <th className="py-2 pr-4 text-primary font-semibold whitespace-nowrap">Role</th>
                                  <th className="py-2 text-primary font-semibold">Contribution</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-border">
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">Roan Yeh (me)</td>
                                  <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">Backend</td>
                                  <td className="py-3 text-muted-foreground">API endpoints and database management.</td>
                                </tr>
                                <tr className="border-b border-border">
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">Ian Ryan, later Patrick Yeh</td>
                                  <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">Frontend</td>
                                  <td className="py-3 text-muted-foreground">UI, screen layouts, and wiring the frontend to the API.</td>
                                </tr>
                                <tr>
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap">Mateo Sufuentes</td>
                                  <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">Algorithms</td>
                                  <td className="py-3 text-muted-foreground">Search and recommendation algorithms.</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          {/* Separator Line */}
                        </div>

                        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-6"/>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
                        <div className="space-y-4 text-left">
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="border-b border-primary/30">
                                  <th className="py-2 pr-4 text-primary font-semibold whitespace-nowrap align-top">Category</th>
                                  <th className="py-2 text-primary font-semibold">Technologies</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-border">
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Frontend</td>
                                  <td className="py-3">
                                    <div className="flex flex-wrap gap-2">
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiReact className="h-4 w-4" />
                                        React Native
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="border-b border-border">
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Backend</td>
                                  <td className="py-3">
                                    <div className="flex flex-wrap gap-2">
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiPython className="h-4 w-4" />
                                        Python
                                      </span>
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiFastapi className="h-4 w-4" />
                                        FastAPI
                                      </span>
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiGmail className="h-4 w-4" />
                                        Gmail SMTP (confirmation emails)
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Database</td>
                                  <td className="py-3">
                                    <div className="flex flex-wrap gap-2">
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiFirebase className="h-4 w-4" />
                                        Firestore (text data)
                                      </span>
                                      <span className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary text-secondary-foreground text-sm">
                                        <SiFirebase className="h-4 w-4" />
                                        Firebase Storage (media)
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                    </div>

                      {/* Demo video */}
                    <div className="gradient-border rounded-lg overflow-hidden p-6">
                      <h3 className="text-center font-semibold text-2xl mb-2 mt-2">Demo Video</h3>

                      <div className="flex justify-center py-8">
                      <div className="relative rounded-[3rem] bg-neutral-900 p-3 shadow-2xl ring-1 ring-white/10">
                        {/* side buttons */}
                        <span className="absolute -left-[3px] top-28 h-8 w-[3px] rounded-l bg-neutral-700" />
                        <span className="absolute -left-[3px] top-40 h-14 w-[3px] rounded-l bg-neutral-700" />
                        <span className="absolute -left-[3px] top-56 h-14 w-[3px] rounded-l bg-neutral-700" />
                        <span className="absolute -right-[3px] top-44 h-20 w-[3px] rounded-r bg-neutral-700" />

                        <div className="relative overflow-hidden rounded-[2.25rem] bg-black">
                          {/* dynamic island */}
                          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />
                          <video
                            src="/projects/handdown/handdown-demo.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="block h-[600px] w-auto"
                          />
                        </div>
                      </div>
                    </div>

                      <p className="text-muted-foreground mb-4">
                        The video above shows the MVP we presented in our final capstone class. We
                        also ran a poster session during Jumbo Days, Tufts' open house for admitted students,
                        where parents, admitted students, and current students tried the platform themselves.
                        In the photo below, which I took, Mateo and Ian stand in front of our poster with
                        the demo running on Ryan's phone.
                      </p>

                      <img src="/projects/handdown/poster-session.webp" alt="Poster Session" className="rounded-lg shadow-lg mx-auto"/>
                    </div>
                  </div>

                  <div className="gradient-border space-y-6 p-6">
                    <h3 className="text-2xl font-semibold mb-6">Project Architecture</h3>

                    <p className="text-muted-foreground text-left mb-4">
                      Handdown is a 3-tier app: a React Native frontend talks to a FastAPI backend over REST,
                      which reads and writes Firebase (Firestore for structured data, Firebase Storage for images).
                      The table below maps each major feature to the API endpoint(s) it calls and the data it touches.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-primary/30">
                            <th className="py-2 pr-4 text-primary font-semibold whitespace-nowrap align-top">Feature</th>
                            <th className="py-2 pr-4 text-primary font-semibold align-top">API Endpoint(s)</th>
                            <th className="py-2 text-primary font-semibold align-top">Database (Firebase)</th>
                          </tr>
                        </thead>
                        <tbody className="text-muted-foreground">
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Sign Up &amp; Onboarding</td>
                            <td className="py-3 pr-4 align-top">
                              /onboarding/email-verification, /code-entry, /basic-info, /profile-photo, /profile-interests, /profile-offerings
                            </td>
                            <td className="py-3 align-top">Firestore profiles &amp; profile-verifications; Storage profiles/&#123;uid&#125;/...</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Login</td>
                            <td className="py-3 pr-4 align-top">/login/login</td>
                            <td className="py-3 align-top">Firestore profiles (email + password lookup)</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Browse / Swipe Feed</td>
                            <td className="py-3 pr-4 align-top">/algo/get-feed-listings (ML-ranked), /feed/swipe-right, /swipe-left, /swipe-down</td>
                            <td className="py-3 align-top">Firestore profiles, listings, conversations</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Search</td>
                            <td className="py-3 pr-4 align-top">/algo/get-search-listings</td>
                            <td className="py-3 align-top">Firestore listings</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Create Listing</td>
                            <td className="py-3 pr-4 align-top">/listings/create-listing</td>
                            <td className="py-3 align-top">Storage (listing image); Firestore listings, profiles</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Messaging</td>
                            <td className="py-3 pr-4 align-top">/conversations/get-all-conversations, /send-message</td>
                            <td className="py-3 align-top">Firestore conversations + messages subcollection</td>
                          </tr>
                          <tr>
                            <td className="py-3 pr-4 font-medium text-foreground whitespace-nowrap align-top">Profile</td>
                            <td className="py-3 pr-4 align-top">/profile/profile-access</td>
                            <td className="py-3 align-top">Firestore profiles</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>


                  <div className="gradient-border space-y-6 p-6">
                    <h3 className="text-2xl font-semibold mb-6">Challenges</h3>
                    <div className="space-y-4 text-left text-muted-foreground">
                      <p>
                        Looking back on version 1, a few things stood out:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <tbody>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">First full-stack project</td>
                              <td className="py-3 align-top">Previous work had been backend-only or solo/small-group, without real GitHub collaboration (aside from a much smaller-scope game design class project). This was the first time working across the full stack, as part of a team.</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Becoming the de facto team lead</td>
                              <td className="py-3 align-top">With three people and no assigned PM, I ended up coordinating scope, timelines, and the handoff between frontend and backend work.</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Defining our own goals</td>
                              <td className="py-3 align-top">Most capstone teams picked from pre-proposed projects where an outside company and stakeholders had already set the goals. We built something of our own instead, so we had to define our own sprints and our own definition of done, with no external stakeholder steering the direction.</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Learning FastAPI and Firebase from scratch</td>
                              <td className="py-3 align-top">Both were new to me, so I was learning their patterns and limits while building with them in parallel.</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Modeling relationships in a NoSQL database</td>
                              <td className="py-3 align-top">Firestore has no foreign keys or cascading deletes. Every interaction (a like, a super-like opening a conversation) meant manually keeping array fields in sync across documents, and deleting a listing required manually cleaning up its conversations, messages, and every profile referencing it.</td>
                            </tr>
                            <tr className="border-b border-border">
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Testing without a deployed backend</td>
                              <td className="py-3 align-top">Everything ran locally, so testing meant pointing the mobile client at whichever teammate's laptop was running the FastAPI server over LAN.</td>
                            </tr>
                            <tr>
                              <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Looser process than I'd later work with professionally</td>
                              <td className="py-3 align-top">Secrets and environment config were handled ad hoc (credentials and an SMTP password lived in source rather than environment variables), with no CI or formal review process.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border space-y-6 p-6">
                    <h3 className="text-2xl font-semibold mb-6">What I'd Do Differently</h3>
                    <div className="space-y-6 text-left text-muted-foreground">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">Team &amp; Process</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Set firmer internal deadlines and milestones</td>
                                <td className="py-3 align-top">Without an external stakeholder enforcing a timeline, things moved at whatever pace felt comfortable, which gave gaps more room to open up.</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Keep a shared tracker, not just check-ins</td>
                                <td className="py-3 align-top">We met regularly as a team, but without a single living document of where each piece stood, our timelines often drifted to different stages, including mine versus my groupmates'; it took documenting the architecture a year later to see the full picture.</td>
                              </tr>
                              <tr>
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Add even a minimal review step before merging</td>
                                <td className="py-3 align-top">Not out of distrust, just so two people look at anything that crosses the frontend/backend boundary before it's considered "done."</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">Technical</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Reconsider the database choice given how relational the data actually was</td>
                                <td className="py-3 align-top">Listings, profiles, conversations, and messages all naturally wanted foreign keys and joins, which we were fighting against in a NoSQL document store.</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Treat secrets as environment variables from day one</td>
                                <td className="py-3 align-top">Instead of retrofitting it later.</td>
                              </tr>
                              <tr>
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Compress media before upload</td>
                                <td className="py-3 align-top">We uploaded listing and profile images straight from the device with no compression, which slowed down loading and degraded the app's overall feel.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gradient-border space-y-6 p-6">
                    <h3 className="text-2xl font-semibold mb-6">Version 2.0</h3>
                    <div className="space-y-6 text-left text-muted-foreground">
                      <p>
                        That reconsideration became real in Version 2.0: I rebuilt the data layer in Supabase
                        (Postgres), with real foreign keys and cascading deletes, Supabase Auth replacing the old
                        plaintext password check, and secrets now loaded from environment variables instead of
                        hardcoded paths. The schema also lays groundwork for expanding beyond Tufts, with a shared
                        universities registry keyed by email domain and a separate database schema per campus. I
                        picked this back up with my brother after the capstone ended, and the backend work is
                        actively ongoing in a separate, private repository.
                      </p>

                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">New Features In Progress</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Moving Help marketplace</td>
                                <td className="py-3 align-top">Pay fellow students to help move items, with tiered pricing (Door to Door, Complete Move, Heavy Duty) and a calendar that auto-matches buyer, seller, and mover availability.</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Multi-university support</td>
                                <td className="py-3 align-top">A shared universities registry and a dedicated database schema per campus, so the app isn't locked to one school.</td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Bidding on listings</td>
                                <td className="py-3 align-top">An alternative to fixed-price only, letting buyers make offers.</td>
                              </tr>
                              <tr>
                                <td className="py-3 pr-4 font-semibold text-foreground align-top whitespace-nowrap">Richer profiles</td>
                                <td className="py-3 align-top">Seller ratings, declared major, and class year surfaced directly on listings.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-2">Early Wireframes</h4>
                        <p className="mb-4">
                          My brother put together new screen wireframes for these features. These are early,
                          low-fidelity sketches, not finished UI.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {[
                            { src: "/projects/handdown/v2/home-feed.png", alt: "Home feed wireframe", label: "Home Feed" },
                            { src: "/projects/handdown/v2/listing-detail.png", alt: "Listing detail wireframe", label: "Listing Detail" },
                            { src: "/projects/handdown/v2/chat-negotiation.png", alt: "Chat negotiation wireframe", label: "Chat & Negotiation" },
                            { src: "/projects/handdown/v2/moving-tiers.png", alt: "Moving help tiers wireframe", label: "Moving Help Tiers" },
                            { src: "/projects/handdown/v2/scheduling-calendar.png", alt: "Scheduling calendar wireframe", label: "Scheduling Calendar" },
                            { src: "/projects/handdown/v2/mover-confirmation.png", alt: "Mover confirmation wireframe", label: "Mover Confirmation" },
                            { src: "/projects/handdown/v2/chats-inbox.png", alt: "Chats inbox wireframe", label: "Chats Inbox" },
                            { src: "/projects/handdown/v2/search-categories.png", alt: "Search and categories wireframe", label: "Search & Categories" },
                          ].map(({ src, alt, label }) => (
                            <div key={label} className="flex flex-col items-center gap-2">
                              <img src={src} alt={alt} className="w-full rounded-lg border border-border" />
                              <span className="text-sm font-medium text-foreground text-center">{label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </section>

      
      
    
    </div>
  );
};