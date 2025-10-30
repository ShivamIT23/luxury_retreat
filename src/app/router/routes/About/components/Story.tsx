import BlurText from "@/components/ui/BlurText";
import { storyData } from "../constant/story";

function Story() {
  return (
    <section className="w-full bg-[#E4E1DD] h-fit px-[5vw] max-w-[calc(1300px+10vw)] mx-auto py-[140px] flex flex-col">
      {/* Left Content */}
      <BlurText text={storyData.title} className="text-[48px]" />
      <div className="flex gap-2 max-w-[1300px] mx-auto">
        <div className="flex flex-col justify-start max-w-[555px] w-full pt-[20px] h-fit gap-8 text-[#1E1E1E]">
          {storyData.paragraphs.slice(0, 2).map((paragraph, index) => (
            <p
              key={index}
              className="text-[24px] leading-[150%] tracking-[1px] font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <img
          src={storyData.image}
          alt="Luxury Travel Experience"
          className="w-full max-w-[720px] h-auto rounded-[8px] shadow-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-start w-full pt-[20px] h-fit gap-8 text-[#1E1E1E]">
          {storyData.paragraphs.slice(2).map((paragraph, index) => (
            <p
              key={index}
              className="text-[24px] leading-[150%] tracking-[1px] font-normal"
            >
              {paragraph}
            </p>
          ))}
        </div>
    </section>
  );
}

export default Story;
