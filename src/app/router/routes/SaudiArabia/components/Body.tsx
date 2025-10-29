import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { saudiArabiaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={saudiArabiaDetail.heading}
      para={saudiArabiaDetail.para}
      img={saudiArabiaDetail.img}
    >
      <DynamicDestinationSideCard
        time={saudiArabiaDetail.time}
        climate={saudiArabiaDetail.climate}
        languages={saudiArabiaDetail.languages}
        heading={saudiArabiaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
