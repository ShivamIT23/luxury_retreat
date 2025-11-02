import { TypewriterEffect } from "@/components/ui/typewriter-effect"

interface word{ text: string; className?: string | undefined; }

function ImageText({img,words}:{img:string;words:word[]}) {
  return (
    <section className="w-full h-fit relative">
        <img src={img?img:"/home/last.png"} alt="ImageInivative" className="w-full h-auto -z-1" />
        <TypewriterEffect cursorClassName="bg-transparent" className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[120%] tracking-[1.3px] text-[32px] text-center' words={words} />
    </section>
  )
}

export default ImageText