import React from 'react';
import WistiaEmbed from '../../shared/HomeAbout/WistiaEmbed';

function Hero() {
    return (
        <section className="relative w-full h-fit">
            <style>{`
        wistia-player[media-id='q09qb286f2']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/q09qb286f2/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
            {/* YouTube video background */}
            <div className="relative w-full h-full z-1 overflow-hidden">
                <video src="https://res.cloudinary.com/dlovcfdar/video/upload/v1761147937/Website-Video-UAE_oajppm.mp4" autoPlay className='w-full relative z-1 ' muted loop></video>
            </div>

            {/* Content on top */}
            <div className="absolute top-[50%] -translate-y-1/2 left-[20%] -translate-x-1/2 z-2 flex flex-col items-center justify-center px-10">
                <h1 className="text-5xl font-bold text-white text-center">
                    Welcome to My Website
                </h1>
                <p className="text-xl text-white mt-4 text-center">
                    This is some overlay content on top of the video.
                </p>
            </div>
        </section>
    );
}

export default Hero;
