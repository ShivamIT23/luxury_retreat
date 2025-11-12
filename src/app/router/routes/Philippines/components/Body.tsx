import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { philippinesDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={philippinesDetail.heading}
      para={philippinesDetail.para}
      img={philippinesDetail.img}
    >
      <DynamicDestinationSideCard
        time={philippinesDetail.time}
        climate={philippinesDetail.climate}
        languages={philippinesDetail.languages}
        heading={philippinesDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
