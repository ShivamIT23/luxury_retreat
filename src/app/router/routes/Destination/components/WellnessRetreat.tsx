import Button from "@/components/common/Button"

function WellnessRetreat() {
  return (
    <section className="mx-auto w-full max-w-[1100px] h-fit px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-28 pt-16 sm:pt-20 md:pt-36 flex flex-col gap-8 sm:gap-10 md:gap-12">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg bg-transparent">
        <img
          src="/wellness/card.webp"
          alt="Wellness Retreat - Luxurious bedroom with private pool view"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Text Overlay */}
        <div className="absolute -bottom-2 right-1/2 translate-x-1/2">
          <div className="bg-[#FFEED7] backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 shadow-[0px_4px_4px_#00000070]">
            <p className="text-[#285F69] font-medium text-sm sm:text-base md:text-[20px] uppercase tracking-[1px]">
              WELLNESS RETREATS
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
        {/* Headline */}
        <h2 className="crimson font-semibold text-2xl sm:text-3xl md:text-[32px] leading-[120%] tracking-[1.3px] text-[#BE8F00] uppercase max-w-4xl">
          EXCLUSIVE ACCESS TO TRANSFORMATIVE WELLNESS RETREATS
        </h2>

        {/* Body Paragraph */}
        <p className="text-sm sm:text-base leading-[28px] tracking-[1px] text-[#4B5563] max-w-4xl font-normal">
          Immerse your clients in serene sanctuaries designed for holistic rejuvenation and mindful escape. Our curated selection of wellness retreats offers expertly crafted experiences blending ancient healing traditions with modern luxury, from tranquil spa therapies and meditation sessions to personalized fitness programs and nutritious cuisine. Every detail is tailored to nurture body, mind, and spirit, providing a sanctuary where wellness meets elegance in perfect harmony.
        </p>

        {/* CTA Button */}
        <Button
          buttonText="DISCOVER MORE"
          handleClick="/wellness"
        />
      </div>
    </section>
  )
}

export default WellnessRetreat