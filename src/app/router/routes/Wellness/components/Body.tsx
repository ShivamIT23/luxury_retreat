import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { wellnessDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={wellnessDetail.heading}
      para={wellnessDetail.para}
      heading2={wellnessDetail.heading2}
      img={wellnessDetail.img}
    >
      <DynamicDestinationSideCard
        time={wellnessDetail.time}
        climate={wellnessDetail.climate}
        languages={wellnessDetail.languages}
        heading={wellnessDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
