import BlurText from "@/components/ui/BlurText"
import { storyData } from "../constant/story"

function Story() {
  return (
    <section className="mx-auto flex w-full h-fit max-w-[calc(1300px+10vw)] flex-col bg-[#E4E1DD] px-4 py-16 sm:px-6 md:px-[5vw] md:py-24 lg:py-[140px]">
      {/* Left Content */}
      <BlurText text={storyData.title} className="text-3xl sm:text-4xl lg:text-[48px]" />
      <div className="mt-8 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:items-start md:gap-8">
        <div className="flex w-full max-w-none flex-col gap-6 text-[#1E1E1E] md:max-w-[555px] md:pt-5">
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
      <div className="mt-8 flex flex-col gap-6 text-[#1E1E1E] md:mt-10 md:gap-8">
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
