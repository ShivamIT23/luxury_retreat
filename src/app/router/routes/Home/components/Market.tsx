import BlurText from "@/components/ui/BlurText"

function Market() {
  return (
    <section className="flex w-full h-fit flex-col items-center justify-center gap-4 px-4 py-12 sm:px-6 md:px-[5vw]">
      <BlurText className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center" text="Markets we cover" />
      <p className="text-center text-sm sm:text-base lg:text-[16px] font-light leading-[140%] tracking-[0.5px] text-[#1e1e1e] max-w-3xl">
        Our presence across the Middle East and beyond connects discerning travelers with bespoke experiences worldwide.
      </p>
      <img
        src="/home/map.webp"
        alt="Map highlighting markets we cover"
        className="mt-4 w-full max-w-3xl sm:max-w-4xl lg:max-w-[1000px]"
        loading="lazy"
      />
    </section>
  )
}

export default Market
