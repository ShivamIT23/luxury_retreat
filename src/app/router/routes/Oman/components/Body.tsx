import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { omanDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={omanDetail.heading}
      para={omanDetail.para}
      img={omanDetail.img}
    >
      <DynamicDestinationSideCard
        time={omanDetail.time}
        climate={omanDetail.climate}
        languages={omanDetail.languages}
        heading={omanDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
