import Button from "@/components/common/Button";
import HeroImage from "@/components/common/HeroImage";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

function Hero() {
    const words = [
        {
            text:"Contact",
            className:"text-[#F6F6F6] font-semibold text-[64px] leading-[120%] tracking-[1.3px]"
        }
    ]
  return (
    <HeroImage img="/contact/hero.png">
      <TypewriterEffect
        cursorClassName="bg-transparent"
        className="text-start uppercase"
        words={words}
      />
      <Button
        buttonText="contact us"
        handleClick={() => console.log("clicked")}
      />
    </HeroImage>
  );
}

export default Hero;
