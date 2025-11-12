
function HeroImage({ img, text, children }: { img: string; text?: string; children?: React.ReactNode }) {
  return (
    <section className="relative w-full h-fit">
      <div className="relative z-[1] h-full w-full overflow-hidden">
        <img src={img} className="relative h-full w-full object-cover" alt="" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" aria-hidden />
      </div>
      {text ? (
        <p className="absolute top-1/2 left-1/2 z-[2] w-[90%] max-w-[960px] -translate-x-1/2 -translate-y-1/2 text-center font-semibold uppercase text-white text-3xl leading-[120%] tracking-[1px] sm:text-4xl lg:text-6xl">
          {text}
        </p>
      ) : (
        <div className="absolute top-1/2 left-1/2 z-[2] flex w-[90%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-4 text-center">
          {children}
        </div>
      )}
    </section>
  )
}

export default HeroImage