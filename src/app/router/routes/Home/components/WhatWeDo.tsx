import Button from "@/components/common/Button"
import BlurText from "@/components/ui/BlurText"
import { whatWeDoList } from "../constant/whatWeDo"

function WhatWeDo() {
  return (
    <section className="flex w-full h-fit flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 md:px-[5vw] md:pt-16">
      <BlurText className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center" text="What We Do" />
      <p className="text-center text-sm sm:text-base lg:text-2xl font-normal leading-[140%] tracking-[0.5px] text-[#1e1e1e] max-w-5xl">
        Are you a travel or hospitality brand looking to expand your reach, enter new markets, and inspire travelers? We specialize in
        creating unique travel experiences and helping our partners achieve measurable sales and marketing success. Let’s talk and explore
        how we can elevate your brand presence and drive results in key global markets.
      </p>
      <div className="flex w-full flex-col gap-10">
        {whatWeDoList.map((card, i) => (
          <CardWithDetail card={card} key={i} />
        ))}
      </div>
    </section>
  )
}

interface Card {
  heading: string
  para: string
  list: string[]
  img: string
}

interface CardType {
  card: Card
}

function CardWithDetail({ card }: CardType) {
  return (
    <section className="grid w-full gap-6 lg:grid-cols-2 lg:items-center leading-[130%] tracking-[0.5px] text-[#444444]">
      <div className="order-2 flex flex-col justify-center gap-3 text-sm sm:text-base lg:order-1 lg:text-[16px] lg:pr-[3vw]">
        <h3 className="crimson text-2xl sm:text-3xl font-semibold tracking-[1.3px] text-[#285F69]">
          {card.heading}
        </h3>
        <p className="text-[#1e1e1e]">{card.para}</p>
        <div className="flex flex-col gap-2">
          {card.list.map((list: string, i: number) => (
            <p key={i} className="flex items-center gap-2 text-sm sm:text-base">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect width="24" height="24" rx="12" fill="#C4A052" fillOpacity="0.2" />
                <path
                  d="M8.81119 18.704C8.81119 18.5653 8.78452 18.496 8.73119 18.496L8.36319 18.672C8.36319 18.5973 8.32052 18.544 8.23519 18.512L8.10719 18.496C8.02185 18.496 7.91519 18.5333 7.78719 18.608C7.76585 18.5547 7.73919 18.5013 7.70719 18.448C7.67519 18.3947 7.64852 18.3467 7.62719 18.304C7.48852 18.0373 7.34985 17.744 7.21119 17.424C7.08319 17.0933 6.96052 16.7787 6.84319 16.48C6.73652 16.1813 6.65119 15.9467 6.58719 15.776C6.54452 15.6373 6.49652 15.4293 6.44319 15.152C6.38985 14.8747 6.33652 14.5227 6.28319 14.096C6.40052 14.1707 6.49119 14.208 6.55519 14.208C6.62985 14.208 6.69919 14.096 6.76319 13.872C6.79519 13.9147 6.85385 13.936 6.93919 13.936C7.00319 13.936 7.05119 13.9147 7.08319 13.872L7.33919 13.488L7.62719 13.584H7.64319C7.66452 13.584 7.68585 13.5733 7.70719 13.552C7.72852 13.5307 7.76052 13.5093 7.80319 13.488C7.88852 13.4347 7.95252 13.408 7.99519 13.408L8.04319 13.424C8.30985 13.552 8.48052 13.7867 8.55519 14.128C8.74719 14.9387 8.93919 15.344 9.13119 15.344C9.32319 15.344 9.54719 15.1413 9.80319 14.736C9.93119 14.5333 10.0592 14.2987 10.1872 14.032C10.3259 13.7653 10.4645 13.4667 10.6032 13.136C10.6245 13.264 10.6459 13.328 10.6672 13.328C10.7205 13.328 10.8112 13.1947 10.9392 12.928C11.0779 12.6613 11.2965 12.2933 11.5952 11.824C11.7659 11.536 11.9792 11.2107 12.2352 10.848C12.5019 10.4853 12.7845 10.112 13.0832 9.728C13.3819 9.344 13.6699 8.98133 13.9472 8.64C14.2352 8.29867 14.4912 8.00533 14.7152 7.76C14.9392 7.51467 15.1045 7.35467 15.2112 7.28C15.6165 7.00267 15.9365 6.736 16.1712 6.48C16.1605 6.55467 16.1445 6.624 16.1232 6.688C16.1125 6.74133 16.1072 6.77867 16.1072 6.8C16.1072 6.84267 16.1285 6.864 16.1712 6.864L16.6192 6.64V6.704C16.6192 6.78933 16.6405 6.832 16.6832 6.832C16.7152 6.832 16.7792 6.784 16.8752 6.688C16.9712 6.592 17.0245 6.52267 17.0352 6.48L17.0032 6.704L17.5472 6.384L17.4192 6.672C17.5899 6.55467 17.7125 6.496 17.7872 6.496C17.8299 6.496 17.8619 6.52267 17.8832 6.576C17.9045 6.61867 17.9152 6.66133 17.9152 6.704C17.9152 6.768 17.8885 6.84267 17.8352 6.928C17.7819 7.01333 17.7125 7.11467 17.6272 7.232C17.5632 7.31733 17.4565 7.44533 17.3072 7.616C17.1685 7.776 16.9552 8.016 16.6672 8.336C16.3792 8.64533 15.9952 9.07733 15.5152 9.632C15.3872 9.77067 15.1899 10.016 14.9232 10.368C14.6565 10.7093 14.3525 11.1093 14.0112 11.568C13.6805 12.016 13.3499 12.4693 13.0192 12.928C12.6885 13.3867 12.3952 13.8027 12.1392 14.176C11.8832 14.5387 11.7019 14.8107 11.5952 14.992L10.6032 16.672C10.3899 17.0347 10.2139 17.3333 10.0752 17.568C9.93652 17.792 9.82985 17.9467 9.75519 18.032C9.59519 18.224 9.41919 18.3947 9.22719 18.544L9.08319 18.464L8.95519 18.544L8.81119 18.704Z"
                  fill="#BE8F00"
                />
              </svg>
              {list}
            </p>
          ))}
        </div>
        <Button buttonText="learn more" handleClick={"/about"} className="w-fit px-6 py-2 text-sm uppercase lg:text-base" />
      </div>
      <img
        src={card.img}
        alt={card.heading}
        className="order-1 h-auto w-full rounded-xl object-cover shadow-md lg:order-2"
        loading="lazy"
      />
    </section>
  )
}

export default WhatWeDo
