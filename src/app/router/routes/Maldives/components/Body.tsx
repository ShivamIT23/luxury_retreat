import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { maldivesDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={maldivesDetail.heading}
      para={maldivesDetail.para}
      img={maldivesDetail.img}
    >
      <DynamicDestinationSideCard
        time={maldivesDetail.time}
        climate={maldivesDetail.climate}
        languages={maldivesDetail.languages}
        heading={maldivesDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
