import React, { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);

  return (
    /* py-12 sm:py-16: Slightly reduced the section padding to match the shorter video */
    <section className="w-full bg-white py-12 sm:py-16">
      
      {/* CONTAINER: 
          Reduced from 450px/600px to 400px/500px for a sleeker, more refined look.
      */}
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-black shadow-sm">
        
        {/* THE VIDEO: 
            - 'object-cover' is doing the heavy lifting here.
            - Kept the centering logic (top-1/2 left-1/2 -translate) for perfect alignment.
        */}
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 
                     scale-[1.8] sm:scale-[1.2] transition-transform duration-1000"
          src="https://res.cloudinary.com/dqant0dxx/video/upload/v1771398440/Gulbadan_Aroojaziz_axfelx.webm"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Optional: Subtle Overlay for a more premium feel */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
    </section>
  );
};

export default VideoSection;