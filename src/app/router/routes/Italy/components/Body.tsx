import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { italyDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={italyDetail.heading}
      para={italyDetail.para}
      img={italyDetail.img}
    >
      <DynamicDestinationSideCard
        time={italyDetail.time}
        climate={italyDetail.climate}
        languages={italyDetail.languages}
        heading={italyDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
