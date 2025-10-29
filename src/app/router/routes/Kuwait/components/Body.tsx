import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { kuwaitDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={kuwaitDetail.heading}
      para={kuwaitDetail.para}
      img={kuwaitDetail.img}
    >
      <DynamicDestinationSideCard
        time={kuwaitDetail.time}
        climate={kuwaitDetail.climate}
        languages={kuwaitDetail.languages}
        heading={kuwaitDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
