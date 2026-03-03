import React, { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);

  return (
    /* py-16 sm:py-20 maintains symmetrical padding consistent with other sections */
    <section className="w-full bg-white py-16 sm:py-20">
      
      {/* CONTAINER: 
          Mobile: h-[400px] to h-[500px] is standard for editorial videos.
          Desktop: h-[600px]
      */}
      <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden bg-black shadow-lg">
        
        {/* THE FIX: 
            - 'scale-[2.2]' on mobile: This aggressively zooms in to push those bottom black bars out.
            - 'sm:scale-[1.4]' on desktop: A more relaxed zoom since the width is larger.
            - 'object-cover' + 'h-full': Ensures the video height always matches the container height.
        */}
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 
                     scale-[2.2] sm:scale-[1.4] transition-transform duration-700"
          src="https://res.cloudinary.com/dqant0dxx/video/upload/v1771398440/Gulbadan_Aroojaziz_axfelx.webm"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* CLEAN OVERLAY (No icons) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-black/5">
          {/* Subtle Branding Watermark */}
          <h2 className="text-white text-[10px] sm:text-xs tracking-[0.6em] uppercase font-light opacity-50">
            Arooj Aziz
          </h2>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;