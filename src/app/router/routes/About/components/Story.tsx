import BlurText from "@/components/ui/BlurText"
import { storyData } from "../constant/story"

function Story() {
  return (
    <section className="mx-auto flex w-full h-fit max-w-[calc(1300px+10vw)] flex-col bg-[#E4E1DD] px-4 py-16 sm:px-6 md:px-[5vw] md:py-24 lg:py-[140px]">
      <BlurText text={storyData.title} className="text-3xl sm:text-4xl lg:text-[48px]" />
      {/* Mobile: All paragraphs together */}
      <div className="mt-8 flex w-full flex-col gap-6 xl:hidden">
        {storyData.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg leading-[150%] tracking-[0.5px] font-normal text-[#1E1E1E]">
            {paragraph}
          </p>
        ))}
        <img
          src={storyData.image}
          alt="Luxury Travel Experience"
          className="w-full rounded-[12px] object-cover shadow-lg"
          loading="lazy"
        />
      </div>
      {/* Desktop: Split layout - first 2 paragraphs with image, then remaining below */}
      <div className="mt-8 hidden w-full flex-col gap-6 lg:mt-10 xl:flex lg:flex-row lg:items-start md:gap-8">
        <div className="flex w-full max-w-none flex-col gap-6 text-[#1E1E1E] md:max-w-[555px] lg:pt-5">
          {storyData.paragraphs.slice(0, 2).map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg lg:text-[24px] leading-[150%] tracking-[0.5px] font-normal">
              {paragraph}
            </p>
          ))}
        </div>
        <img
          src={storyData.image}
          alt="Luxury Travel Experience"
          className="w-full max-w-full rounded-[12px] object-cover shadow-lg md:max-w-[720px]"
          loading="lazy"
        />
      </div>
      <div className="mt-8 hidden flex-col gap-6 text-[#1E1E1E] lg:mt-10 xl:flex lg:gap-8">
        {storyData.paragraphs.slice(2).map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg lg:text-[24px] leading-[150%] tracking-[0.5px] font-normal">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default Story
