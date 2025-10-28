
function HeroImage({img,text,children}:{img:string;text?:string;children?:React.ReactNode}) {
  return (
    <section className="relative w-full h-fit">
            <div className="relative w-full h-full z-1 overflow-hidden">
                <img src={img}  className='w-full relative z-1 h-auto' />
            </div>
            {text ? <p className="absolute top-1/2 -translate-y-1/2 left-1/2 z-2 -translate-x-1/2 text-white font-semibold uppercase text-6xl leading-[120%] tracking-[1.3px]">
            {text}</p>:
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 z-2 flex flex-col -translate-x-1/2 items-center gap-3 justify-center w-fit max-w-[700px]">
            
            {children && children}
            </div>}
        </section>
  )
}

export default HeroImage