import Button from "@/components/common/Button";
import HeroImage from "@/components/common/HeroImage";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

function Hero() {
    const words = [
        {
            text:"Contact",
            className:"text-[#F6F6F6] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[1.3px]"
        }
    ]
  return (
    <HeroImage img="/contact/hero.png">
      <TypewriterEffect
        cursorClassName="bg-transparent"
        className="text-center lg:text-start uppercase"
        words={words}
      />
      <Button
        buttonText="contact us"
        handleClick={"/contact"}
        className="px-6 py-3 text-sm uppercase lg:text-base"
      />
    </HeroImage>
  );
}

export default Hero;
