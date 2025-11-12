import Button from "@/components/common/Button"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import HeroVideo from "@/app/router/shared/HomeAbout/HeroVideo"

interface HeroProps {
  onVideoLoaded?: () => void
}

function Hero({ onVideoLoaded }: HeroProps) {
  const words = [
    {
      text: "GCC",
      className:
        "text-[#F6F6F6] font-semibold text-4xl sm:text-5xl lg:text-[64px] leading-[120%] tracking-[1.3px] uppercase text-center",
    },
  ]
  return (
    <HeroVideo onVideoLoaded={onVideoLoaded}>
      <div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-6 px-4 text-center sm:px-6 lg:left-1/2 lg:w-fit lg:max-w-[800px] lg:-translate-x-1/2 lg:px-0">
        <TypewriterEffect cursorClassName="bg-transparent" className="uppercase text-center" words={words} />
        <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-[130%] tracking-[1px] text-white crimson italic">
          The Promise of Elevated Luxury Travel and Lifestyle Indulgence
        </p>
        <Button buttonText="contact us" handleClick={() => console.log("clicked")} className="px-6 py-3 text-sm uppercase lg:text-base" />
      </div>
    </HeroVideo>
  )
}

export default Hero
