import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { moroccoDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={moroccoDetail.heading}
      para={moroccoDetail.para}
      img={moroccoDetail.img}
    >
      <DynamicDestinationSideCard
        time={moroccoDetail.time}
        climate={moroccoDetail.climate}
        languages={moroccoDetail.languages}
        heading={moroccoDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
