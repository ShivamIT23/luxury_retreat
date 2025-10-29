import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { seychellesDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={seychellesDetail.heading}
      para={seychellesDetail.para}
      img={seychellesDetail.img}
    >
      <DynamicDestinationSideCard
        time={seychellesDetail.time}
        climate={seychellesDetail.climate}
        languages={seychellesDetail.languages}
        heading={seychellesDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
