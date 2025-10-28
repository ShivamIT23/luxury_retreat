import DestinationCard from "@/components/common/DestinationCard";
import BlurText from "@/components/ui/BlurText";
import { destinationLists } from "../constant/destinations";

function All() {
  return (
    <section className="my-[48px] px-[5vw] w-full h-fit gap-[48px] flex flex-col justify-center items-center">
      <BlurText className="text-5xl capitalize" text="All Destinations" />
      {destinationLists.map((list,i)=>(
        <section key={i} className="flex flex-col gap-4">
        <BlurText className="text-[32px] font-bold capitalize" text={list.name} />
        <div className="grid grid-cols-3 gap-6 w-full">
        {list.cards.map((card,i)=>(
          <DestinationCard key={i} heading={card.heading} para={card.para} img={card.img} link={card.link} />
        ))}
        </div>
      </section>
      ))}
    </section>
  );
}

export default All;
