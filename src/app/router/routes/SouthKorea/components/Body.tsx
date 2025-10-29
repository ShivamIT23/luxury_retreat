import DynamicDestinationBody from "@/components/common/DynamicDestinationBody";
import DynamicDestinationSideCard from "@/components/common/DynamicDestinationSideCard";
import { southKoreaDetail } from "../constant/detail";

function Body() {
  return (
    <DynamicDestinationBody
      heading={southKoreaDetail.heading}
      para={southKoreaDetail.para}
      img={southKoreaDetail.img}
    >
      <DynamicDestinationSideCard
        time={southKoreaDetail.time}
        climate={southKoreaDetail.climate}
        languages={southKoreaDetail.languages}
        heading={southKoreaDetail.heading}
      />
    </DynamicDestinationBody>
  );
}

export default Body;
