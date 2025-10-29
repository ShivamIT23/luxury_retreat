import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { southAfricaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={southAfricaDetail.heading}
      para={southAfricaDetail.para}
      img={southAfricaDetail.img}
    >
      <DynamicDestinationSideCard
        time={southAfricaDetail.time}
        climate={southAfricaDetail.climate}
        languages={southAfricaDetail.languages}
        heading={southAfricaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
