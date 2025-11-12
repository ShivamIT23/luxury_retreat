import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { ukDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={ukDetail.heading}
      para={ukDetail.para}
      img={ukDetail.img}
    >
      <DynamicDestinationSideCard
        time={ukDetail.time}
        climate={ukDetail.climate}
        languages={ukDetail.languages}
        heading={ukDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
