import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { bahrainDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={bahrainDetail.heading}
      para={bahrainDetail.para}
      img={bahrainDetail.img}
    >
      <DynamicDestinationSideCard
        time={bahrainDetail.time}
        climate={bahrainDetail.climate}
        languages={bahrainDetail.languages}
        heading={bahrainDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
