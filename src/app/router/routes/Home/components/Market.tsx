import BlurText from "@/components/ui/BlurText"

function Market() {
  return (
    <section className="flex flex-col w-full h-fit gap-1 justify-center items-center">
        <BlurText className="text-5xl uppercase" text="Markets we cover" />
      <p className="text-[#1e1e1e] font-light text-[16px] leading-[120%] tracking-[1px] text-center">
        Our Presence Across the Middle East and Across
      </p>
        <img src="/home/map.png" alt="Map" className="h-auto max-w-[1000px] w-full mt-4 mb-[200px]" />
    </section>
  )
}

export default Market