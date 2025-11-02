import HeroVideo from '@/app/router/shared/HomeAbout/HeroVideo';
import Button from "@/components/common/Button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

interface HeroProps {
    onVideoLoaded?: () => void;
}

function Hero({ onVideoLoaded }: HeroProps) {
    const words = [
        {
          text: "Representation",
          className: "text-5xl text-[#F6F6F6] text-start uppercase font-medium leading-[1.3em] tracking-wide",
        },
        {
          text: "&",
          className: "text-5xl text-[#F6F6F6] text-start uppercase font-medium leading-[1.3em] tracking-wide",
        },
        {
          text: "Consultants",
          className: "text-5xl text-[#F6F6F6] text-start uppercase font-medium leading-[1.3em] tracking-wide",
        },
      ];

    return (
        <HeroVideo onVideoLoaded={onVideoLoaded}>
            <div className="absolute top-[50%] -translate-y-1/2 left-0 z-2 flex flex-col items-start gap-6 justify-center mx-[6vw] w-fit max-w-[800px]">
                <TypewriterEffect cursorClassName="bg-transparent" className='text-5xl text-[#F6F6F6] text-start uppercase max-w-[480px] font-medium leading-[1.3em] tracking-wide' words={words} />
                <p className="text-[16px] font-normal leading-[120%] tracking-[1px] text-white text-justify [text-align-last:start] max-w-[800px]">
                We take pride in partnering with some of the world's most discerning and exclusive hospitality and travel companies. From charming boutique hotels and luxurious beachfront resorts to unique experience-driven camps and serene wellness retreats, our clients offer diverse, unforgettable experiences. Discover the exceptional properties we represent and the unique adventures they provide
                </p>
                <Button buttonText="contact us" handleClick={()=>console.log("clicked")} />
                    <p className='text-[14px] font-normal leading-[120%] tracking-[1px] text-white'>For GCC & Middle East Markets</p>
            </div>
        </HeroVideo>
    );
}

export default Hero;
