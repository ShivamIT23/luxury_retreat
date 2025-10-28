import Button from "@/components/common/Button";
import HeroImage from "@/components/common/HeroImage";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

function Hero() {
    const words = [
        {
            text:"Our",
            className:"text-[#F6F6F6] font-semibold text-[64px] leading-[120%] tracking-[1.3px]"
        },
        {
            text:"Destinations",
            className:"text-[#F6F6F6] font-semibold text-[64px] leading-[120%] tracking-[1.3px]"
        }
    ]
  return (
    <HeroImage img="/destination/hero.png">
      <TypewriterEffect
        cursorClassName="bg-transparent"
        className="text-start uppercase"
        words={words}
      />
      <p className="text-5xl font-semibold leading-[120%] tracking-[1.3px] text-white crimson italic">
        Local relationships.
      </p>
      <p className="text-5xl font-semibold leading-[120%] tracking-[1.3px] text-white crimson italic">
        Measurable bookings.
      </p>
      <Button
        buttonText="contact us"
        handleClick={() => console.log("clicked")}
      />
    </HeroImage>
  );
}

export default Hero;
