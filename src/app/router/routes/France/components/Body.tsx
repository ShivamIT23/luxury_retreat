import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { franceDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={franceDetail.heading}
      para={franceDetail.para}
      img={franceDetail.img}
    >
      <DynamicDestinationSideCard
        time={franceDetail.time}
        climate={franceDetail.climate}
        languages={franceDetail.languages}
        heading={franceDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
