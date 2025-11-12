import DestinationCard from "@/components/common/DestinationCard"
import BlurText from "@/components/ui/BlurText"
import { destinationLists } from "../constant/destinations"

function All() {
  return (
    <section className="flex w-full h-fit flex-col items-center gap-12 px-4 py-12 sm:px-6 md:px-[5vw] md:py-16">
      <BlurText className="text-3xl capitalize sm:text-4xl lg:text-5xl" text="All Destinations" />
      {destinationLists.map((list, i) => (
        <section key={list.name + i} className="flex w-full flex-col gap-6">
          <BlurText className="text-2xl font-bold capitalize sm:text-3xl lg:text-[32px]" text={list.name} />
          <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {list.cards.map((card, index) => (
              <DestinationCard key={card.heading + index} heading={card.heading} para={card.para} img={card.img} link={card.link} />
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}

export default All
