import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full bg-white pt-12 sm:pt-16 pb-0">
      <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-[#f7f1f0]">

        {/* MOBILE VIDEO */}
        <video
          /* FIX: We use 'scale-[1.25]' to zoom in just enough to push 
             the black strips outside the 'overflow-hidden' container. 
          */
          className="absolute inset-0 w-full h-full object-cover block sm:hidden scale-[1.25]"
          /* Added 'c_crop,g_center' logic to Cloudinary URL to help 
             the server focus on the center content 
          */
          src="https://res.cloudinary.com/dqant0dxx/video/upload/c_fill,ar_3:4,g_auto/q_auto:best/v1771398440/Gulbadan_Aroojaziz_axfelx.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* DESKTOP VIDEO */}
        <video
          /* Desktop bars are usually thinner, so 'scale-[1.15]' 
             is usually enough to hide them without losing quality.
          */
          className="absolute inset-0 w-full h-full object-cover hidden sm:block scale-[1.15]"
          src="https://res.cloudinary.com/dqant0dxx/video/upload/c_fill,ar_16:9,g_auto/q_auto:best/v1771398440/Gulbadan_Aroojaziz_axfelx.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />

        {/* Dark overlay to blend the video into the site */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </section>
  );
};

export default VideoSection;