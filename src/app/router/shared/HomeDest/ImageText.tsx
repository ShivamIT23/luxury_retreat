import { TypewriterEffect } from "@/components/ui/typewriter-effect"

interface Word {
  text: string
  className?: string | undefined
}

function ImageText({ img, words }: { img: string; words: Word[] }) {
  return (
    <section className="relative w-full h-fit">
      <img src={img ? img : "/home/last.png"} alt="Inspiring travel destination" className="w-full h-auto" loading="lazy" />
      <TypewriterEffect
        cursorClassName="bg-transparent"
        className="absolute top-1/2 left-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-wrap justify-center gap-x-2 text-center text-2xl leading-[120%] tracking-[1px] text-white sm:text-3xl lg:text-[32px]"
        words={words}
      />
    </section>
  )
}

export default ImageText
