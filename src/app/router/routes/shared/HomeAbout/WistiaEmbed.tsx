import React, { useEffect } from "react";

interface ScreenPalProps {
    videoId: string;
}

const ScreenPalPlayer: React.FC<ScreenPalProps> = ({ videoId }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://go.screenpal.com/player/appearance/${videoId}`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [videoId]);

    return (
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe
                src={`https://go.screenpal.com/player/${videoId}?autoplay=true&muted=true&showControls=false&showTitle=false`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                scrolling="no"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="ScreenPal video player"
            ></iframe>
        </div>
    );
};

export default ScreenPalPlayer;
