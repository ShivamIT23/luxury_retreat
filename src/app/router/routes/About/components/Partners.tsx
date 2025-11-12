import BlurText from "@/components/ui/BlurText"
import { partnersData } from "../constant/partners"

function Partners() {
  return (
    <section className="mx-auto flex w-full h-fit max-w-[calc(1300px+10vw)] flex-col items-center bg-[#E4E1DD] px-4 pb-24 pt-12 sm:px-6 md:px-[5vw] md:pt-[70px] md:pb-[200px]">
      <BlurText text={partnersData.title} className="text-3xl sm:text-4xl lg:text-[48px]" />
      <p className="mt-3 max-w-3xl text-center text-sm sm:text-base lg:text-[16px] leading-[150%] tracking-[0.2px] text-[#4B5563]">
        {partnersData.subtitle}
      </p>
      <div className="mt-10 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partnersData.partners.map((partner, index) => (
          <article
            key={index}
            className="flex h-full flex-col items-center justify-start gap-6 overflow-hidden rounded-[12px] bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl md:p-10"
          >
            <img src={partner.logo} alt={partner.name} className="h-14 w-auto object-contain sm:h-16" loading="lazy" />

            {/* Partner Info */}
            <div className="flex w-full grow flex-col items-center gap-3">
              <BlurText text={partner.name} className="text-lg sm:text-xl lg:text-[20px] leading-[28px]" />
              <p className="text-sm sm:text-base lg:text-[16px] leading-[150%] text-[#4B5563]">{partner.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Partners
