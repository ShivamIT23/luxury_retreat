import HeroVideo from "@/app/router/shared/HomeAbout/HeroVideo"
import Button from "@/components/common/Button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

interface HeroProps {
  onVideoLoaded?: () => void
}

function Hero({ onVideoLoaded }: HeroProps) {
  const words = [
    {
      text: "Representation",
      className:
        "text-3xl sm:text-4xl lg:text-5xl text-[#F6F6F6] uppercase font-medium leading-tight lg:leading-[1.3em] tracking-wide text-center lg:text-left",
    },
    {
      text: "&",
      className:
        "text-3xl sm:text-4xl lg:text-5xl text-[#F6F6F6] uppercase font-medium leading-tight lg:leading-[1.3em] tracking-wide text-center lg:text-left",
    },
    {
      text: "Consultants",
      className:
        "text-3xl sm:text-4xl lg:text-5xl text-[#F6F6F6] uppercase font-medium leading-tight lg:leading-[1.3em] tracking-wide text-center lg:text-left",
    },
  ]

  return (
    <HeroVideo onVideoLoaded={onVideoLoaded}>
      <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-5 px-4 text-center lg:left-0 lg:mx-[6vw] lg:w-fit lg:max-w-[800px] lg:items-start lg:px-0 lg:text-left">
        <TypewriterEffect
          cursorClassName="bg-transparent"
          className="text-3xl sm:text-4xl lg:text-5xl text-[#F6F6F6] uppercase font-medium leading-tight lg:leading-[1.3em] tracking-wide max-w-[480px]"
          words={words}
        />
        <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-[140%] line-clamp-2 md:line-clamp-none tracking-[0.5px] text-white/90 lg:text-justify lg:[text-align-last:start] max-w-[800px]">
          We take pride in partnering with some of the world's most discerning and exclusive hospitality and travel companies. From
          charming boutique hotels and luxurious beachfront resorts to unique experience-driven camps and serene wellness retreats, our
          clients offer diverse, unforgettable experiences. Discover the exceptional properties we represent and the unique adventures
          they provide.
        </p>
        <Button
          buttonText="contact us"
          handleClick={"/contact"}
          className="px-6 py-3 text-sm uppercase lg:text-base"
        />
        <p className="text-xs sm:block hidden sm:text-sm lg:text-[14px] font-normal leading-[140%] tracking-[0.5px] text-white/90">
          For GCC &amp; Middle East Markets
        </p>
      </div>
    </HeroVideo>
  )
}

export default Hero
