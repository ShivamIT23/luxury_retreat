import Button from "@/components/common/Button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import HeroVideo from "@/app/router/shared/HomeAbout/HeroVideo";

interface HeroProps {
    onVideoLoaded?: () => void;
}

function Hero({ onVideoLoaded }: HeroProps) {
  const words = [
    {
      text: "GCC",
      className:
        "text-[#F6F6F6] font-semibold text-[64px] leading-[120%] tracking-[1.3px]",
    },
  ];
  return (
    <HeroVideo onVideoLoaded={onVideoLoaded}>
      <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-2 flex flex-col items-center gap-6 justify-center w-fit max-w-[800px]">
        <TypewriterEffect
          cursorClassName="bg-transparent"
          className="text-start uppercase"
          words={words}
        />
        <p className="text-5xl font-semibold leading-[120%] text-center tracking-[1.3px] text-white crimson italic">
          The Promise of Elevated Luxury Travel and Lifestyle Indulgence
        </p>
        <Button
          buttonText="contact us"
          handleClick={() => console.log("clicked")}
        />
      </div>
    </HeroVideo>
  );
}

export default Hero;
