import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { greeceDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={greeceDetail.heading}
      para={greeceDetail.para}
      img={greeceDetail.img}
    >
      <DynamicDestinationSideCard
        time={greeceDetail.time}
        climate={greeceDetail.climate}
        languages={greeceDetail.languages}
        heading={greeceDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
