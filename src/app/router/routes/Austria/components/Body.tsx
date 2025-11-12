import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { austriaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={austriaDetail.heading}
      para={austriaDetail.para}
      img={austriaDetail.img}
    >
      <DynamicDestinationSideCard
        time={austriaDetail.time}
        climate={austriaDetail.climate}
        languages={austriaDetail.languages}
        heading={austriaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
