import { useState, useRef, useEffect } from "react";
import type React from "react";

interface HeroVideoProps {
    children: React.ReactNode;
    onVideoLoaded?: () => void;
}

function HeroVideo({children, onVideoLoaded}: HeroVideoProps) {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Use 'canplay' instead of 'loadeddata' - fires earlier when video can start playing
            const handleCanPlay = () => {
                setVideoLoaded(true);
                onVideoLoaded?.();
            };
            
            // Also check if video is already loaded
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA or HAVE_ENOUGH_DATA
                setVideoLoaded(true);
                onVideoLoaded?.();
            } else {
                video.addEventListener('canplay', handleCanPlay, { once: true });
            }
            
            return () => {
                video.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, [onVideoLoaded]);

    return (
        <section className="relative w-full h-fit">
            <div className="relative w-full h-full z-1 overflow-hidden">
                {/* Placeholder image */}
                <img 
                    src="/homeHero.png" 
                    alt="Hero" 
                    className={`w-full relative inset-0 z-10 transition-opacity duration-1000 ease-in-out ${
                        videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                />
                {/* Video */}
                <video 
                    ref={videoRef}
                    src="https://res.cloudinary.com/dlovcfdar/video/upload/v1761147937/Website-Video-UAE_oajppm.mp4" 
                    autoPlay 
                    preload="metadata"
                    playsInline
                    className={`w-full absolute top-0 left-0 z-20 transition-opacity duration-1000 ease-in-out ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    muted 
                    loop
                ></video>
            </div>
            {children}
        </section>
    );
}

export default HeroVideo;
