import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { uaeDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={uaeDetail.heading}
      para={uaeDetail.para}
      img={uaeDetail.img}
    >
      <DynamicDestinationSideCard
        time={uaeDetail.time}
        climate={uaeDetail.climate}
        languages={uaeDetail.languages}
        heading={uaeDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
