import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { spainDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={spainDetail.heading}
      para={spainDetail.para}
      img={spainDetail.img}
    >
      <DynamicDestinationSideCard
        time={spainDetail.time}
        climate={spainDetail.climate}
        languages={spainDetail.languages}
        heading={spainDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
