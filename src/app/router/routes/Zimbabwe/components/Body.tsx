import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { zimbabweDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={zimbabweDetail.heading}
      para={zimbabweDetail.para}
      img={zimbabweDetail.img}
    >
      <DynamicDestinationSideCard
        time={zimbabweDetail.time}
        climate={zimbabweDetail.climate}
        languages={zimbabweDetail.languages}
        heading={zimbabweDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
