import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { qatarDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={qatarDetail.heading}
      para={qatarDetail.para}
      img={qatarDetail.img}
    >
      <DynamicDestinationSideCard
        time={qatarDetail.time}
        climate={qatarDetail.climate}
        languages={qatarDetail.languages}
        heading={qatarDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
