import Button from "@/components/common/Button"
import HeroImage from "@/components/common/HeroImage"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

function Hero() {
  const words = [
    {
      text: "Our",
      className:
        "text-[#F6F6F6] font-semibold text-3xl sm:text-4xl lg:text-[64px] leading-[120%] tracking-[1.3px]",
    },
    {
      text: "Destinations",
      className:
        "text-[#F6F6F6] font-semibold text-3xl sm:text-4xl lg:text-[64px] leading-[120%] tracking-[1.3px]",
    },
  ]
  return (
    <HeroImage img="/destination/hero.webp">
      <TypewriterEffect cursorClassName="bg-transparent" className="text-center uppercase" words={words} />
      <p className="text-2xl font-semibold leading-[130%] tracking-[1px] text-white crimson italic sm:text-3xl lg:text-5xl">
        Local relationships.
      </p>
      <p className="text-2xl font-semibold leading-[130%] tracking-[1px] text-white crimson italic sm:text-3xl lg:text-5xl">
        Measurable bookings.
      </p>
      <Button buttonText="contact us" handleClick={"/contact"} className="px-6 py-3 text-sm uppercase lg:text-base" />
    </HeroImage>
  )
}

export default Hero
