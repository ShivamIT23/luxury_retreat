import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { mauritiusDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={mauritiusDetail.heading}
      para={mauritiusDetail.para}
      img={mauritiusDetail.img}
    >
      <DynamicDestinationSideCard
        time={mauritiusDetail.time}
        climate={mauritiusDetail.climate}
        languages={mauritiusDetail.languages}
        heading={mauritiusDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
