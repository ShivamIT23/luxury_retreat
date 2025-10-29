import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { chinaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={chinaDetail.heading}
      para={chinaDetail.para}
      img={chinaDetail.img}
    >
      <DynamicDestinationSideCard
        time={chinaDetail.time}
        climate={chinaDetail.climate}
        languages={chinaDetail.languages}
        heading={chinaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
