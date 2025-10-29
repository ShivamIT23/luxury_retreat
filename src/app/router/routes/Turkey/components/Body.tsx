import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { turkeyDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={turkeyDetail.heading}
      para={turkeyDetail.para}
      img={turkeyDetail.img}
    >
      <DynamicDestinationSideCard
        time={turkeyDetail.time}
        climate={turkeyDetail.climate}
        languages={turkeyDetail.languages}
        heading={turkeyDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
