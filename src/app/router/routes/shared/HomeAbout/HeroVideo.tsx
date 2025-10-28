import type React from "react";

function HeroVideo({children}:{children:React.ReactNode}) {
    return (
        <section className="relative w-full h-fit">
            <div className="relative w-full h-full z-1 overflow-hidden">
                <video src="https://res.cloudinary.com/dlovcfdar/video/upload/v1761147937/Website-Video-UAE_oajppm.mp4" autoPlay className='w-full relative z-1 ' muted loop></video>
            </div>
            {children}
        </section>
    );
}

export default HeroVideo;
