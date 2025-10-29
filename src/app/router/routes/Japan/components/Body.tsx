import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { japanDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={japanDetail.heading}
      para={japanDetail.para}
      img={japanDetail.img}
    >
      <DynamicDestinationSideCard
        time={japanDetail.time}
        climate={japanDetail.climate}
        languages={japanDetail.languages}
        heading={japanDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
