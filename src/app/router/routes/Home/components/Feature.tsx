import Button from "@/components/common/Button";
import DestinationCard from "@/components/common/DestinationCard";
import BlurText from "@/components/ui/BlurText";
import {featureList} from "../constant/features"

function Feature() {
  return (
    <section className="flex flex-col w-full h-fit justify-center items-center gap-4 mt-[70px] px-[5vw]">
      <BlurText className="text-5xl uppercase" text="Featured Destinations" />
      <p className="text-black font-normal text-2xl leading-[120%] tracking-[1px]">
        Explore our handpicked selection of the most exclusive destinations for
        your next luxury getaway
      </p>
      <section className="flex gap-6 justify-center items-center">
        {featureList.map((card,i)=>(
          <DestinationCard key={i} heading={card.heading} para={card.para} img={card.img} link={card.link} />
        ))}
      </section>
      <Button
        buttonText={
          <span className="flex items-center gap-1">
            view all destinations 
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </span>
        }
      />
    </section>
  );
}

export default Feature;
