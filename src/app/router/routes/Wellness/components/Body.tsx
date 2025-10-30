import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import { wellnessDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={wellnessDetail.heading}
      para={wellnessDetail.para}
      heading2={wellnessDetail.heading2}
      img={wellnessDetail.img}
    >
      <SideCard />
    </DynamicDestinationBody>
  );
}

function SideCard(){
  return (
    <article className="w-fit max-w-[400px] h-fit flex flex-col bg-[#285F69] rounded-[8px] shadow-sm">
      <img src="/wellness/card.png" alt="Wellness Card" className="w-full h-auto object-cover rounded-t-[8px]" />
      <div className="flex flex-col p-[60px] text-[#E4E1DD] items-center h-full">
        <h4 className="text-[20px] leading-[120%] uppercase pb-5 tracking-[1.3px]">The Promise of Quality</h4>
        <p className="text-[16px] leading-[25px] tracking-[1px] text-center font-light">
        Only the best. Each property, partner, and experience is carefully selected to uphold the highest standards of luxury, style, and discretion.
        </p>
      </div>
          </article>
  )
}

export default Body;
