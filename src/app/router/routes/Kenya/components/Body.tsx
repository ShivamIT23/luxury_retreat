import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { kenyaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={kenyaDetail.heading}
      para={kenyaDetail.para}
      img={kenyaDetail.img}
    >
      <DynamicDestinationSideCard
        time={kenyaDetail.time}
        climate={kenyaDetail.climate}
        languages={kenyaDetail.languages}
        heading={kenyaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
