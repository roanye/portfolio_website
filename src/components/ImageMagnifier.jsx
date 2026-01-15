import { useRef, useState } from 'react';

export const ImageMagnifier = ({ 
  src, 
  alt, 
  mgWidth = 150, 
  mgHeight = 150, 
  zoomFactor = 2.5,
  className = 'w-full h-full object-cover'
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const imgRef = useRef(null);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const handleMouseEnter = (e) => {
    const el = e.currentTarget;
    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    setXY([x, y]);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  // Calculate the position of the magnified image inside the lens
  const magnifiedX = (x * zoomFactor) - (mgWidth / 2);
  const magnifiedY = (y * zoomFactor) - (mgHeight / 2);

  return (
    <div
      ref={imgRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block w-full"
    >
      <img 
        src={src} 
        alt={alt} 
        className={className}
      />

      {/* Magnifier Glass */}
      {showMagnifier && (
        <div
          style={{
            position: 'absolute',
            left: `${x - mgWidth / 2}px`,
            top: `${y - mgHeight / 2}px`,
            width: `${mgWidth}px`,
            height: `${mgHeight}px`,
            border: '3px solid #1f2937',
            backgroundColor: 'white',
            cursor: 'crosshair',
            zIndex: 10,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            outline: '2px solid rgba(31, 41, 55, 0.3)',
            outlineOffset: '2px',
            overflow: 'hidden'
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              position: 'absolute',
              left: `-${magnifiedX}px`,
              top: `-${magnifiedY}px`,
              width: `${imgWidth * zoomFactor}px`,
              height: `${imgHeight * zoomFactor}px`,
              pointerEvents: 'none'
            }}
          />
        </div>
      )}
    </div>
  );
};
