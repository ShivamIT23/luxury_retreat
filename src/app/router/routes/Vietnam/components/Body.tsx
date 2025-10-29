import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { vietnamDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={vietnamDetail.heading}
      para={vietnamDetail.para}
      img={vietnamDetail.img}
    >
      <DynamicDestinationSideCard
        time={vietnamDetail.time}
        climate={vietnamDetail.climate}
        languages={vietnamDetail.languages}
        heading={vietnamDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
