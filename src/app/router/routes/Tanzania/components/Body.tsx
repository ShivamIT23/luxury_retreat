import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { tanzaniaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={tanzaniaDetail.heading}
      para={tanzaniaDetail.para}
      img={tanzaniaDetail.img}
    >
      <DynamicDestinationSideCard
        time={tanzaniaDetail.time}
        climate={tanzaniaDetail.climate}
        languages={tanzaniaDetail.languages}
        heading={tanzaniaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
