import Button from "@/components/common/Button"
import DestinationCard from "@/components/common/DestinationCard"
import BlurText from "@/components/ui/BlurText"
import { featureList } from "../constant/features"

function Feature() {
  return (
    <section className="mt-16 flex w-full h-fit flex-col items-center justify-center gap-6 px-4 sm:px-6 md:px-[5vw]">
      <BlurText className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center" text="Featured Destinations" />
      <p className="text-center text-sm sm:text-base lg:text-2xl font-normal leading-[140%] tracking-[0.5px] text-black max-w-4xl">
        Explore our handpicked selection of the most exclusive destinations for your next luxury getaway.
      </p>
      <section className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featureList.map((card, i) => (
          <DestinationCard key={i} heading={card.heading} para={card.para} img={card.img} link={card.link} />
        ))}
      </section>
      <Button
        buttonText={
          <span className="flex items-center gap-2 text-sm sm:text-base lg:text-lg">
            view all destinations
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        }
        className="px-6 py-3 text-sm uppercase lg:text-base"
      />
    </section>
  )
}

export default Feature

