import Button from "@/components/common/Button"
import BlurText from "@/components/ui/BlurText"
import { RepresentList } from "../constant/represent"
import { Link } from "react-router-dom";

function Represent() {
  return (
    <section className="my-24 flex w-full h-fit flex-col items-center justify-center gap-8 px-4 sm:px-6 md:px-[5vw] leading-[130%]">
      <BlurText className="text-3xl sm:text-4xl lg:text-5xl uppercase text-center" text="Who we represent" />
      <h3 className="text-center text-2xl sm:text-3xl font-semibold tracking-[1.3px] text-[#285F69] crimson">
        Looking to expand your reach? Partner with us today
      </h3>
      <p className="text-center text-sm sm:text-base lg:text-2xl tracking-[0.5px] text-[#1e1e1e] max-w-5xl">
        Are you a travel or hospitality brand looking to expand your reach, enter new markets, and inspire travelers? We specialize in
        creating unique travel experiences and helping our partners achieve measurable sales and marketing success. Let&apos;s talk and
        explore how we can elevate your brand presence and drive results in key global markets.
      </p>
      <article className="w-fit h-fit gap-4 flex flex-col justify-center items-start text-[#BE8F00] jakarta font-medium text-[12px] leading-[120%] -tracking-px">
        <div className="flex gap-1 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
              stroke="#285F69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          +971 055-566-8446
        </div>
        <div className="flex gap-1 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
              stroke="#285F69"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          info.rep@luxuryretreat.com
        </div>
        <div className="flex gap-3">
          <Link to={"mailto:info.rep@luxuryretreat.ae"} target="_blank" className="w-fit h-fit">
            <Button buttonText="email" />
          </Link>
          <Link to={"https://wa.me/971555668446"} target="_blank" className="w-fit h-fit">
            <Button buttonText="whatsapp" />
          </Link>
        </div>
      </article>
      <ImageText img="/home/represent1.webp" text="Tourism Boards & Destinations" />
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RepresentList.slice(0, 3).map((card, i) => (
          <ImageText key={card.text + i} img={card.img} text={card.text} />
        ))}
      </div>
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {RepresentList.slice(3).map((card, i) => (
          <ImageText key={card.text + i} img={card.img} text={card.text} />
        ))}
      </div>
      <Button buttonText="contact us" handleClick={"/contact"} className="w-fit px-6 py-3 text-sm uppercase lg:text-base" />
    </section>
  )
}

function ImageText({ img, text }: { img: string; text: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
      <img src={img} alt={text} className="h-full w-full object-cover" loading="lazy" />
      <BlurText
        text={text}
        direction="bottom"
        className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 text-center text-2xl leading-[120%] tracking-[-0.5px] text-white sm:text-3xl lg:text-5xl flex-nowrap whitespace-nowrap text-shadow-[0px_4px_4px_#00000025] font-medium crimson border-b-4 border-[#BE8F00] pb-1"
      ></BlurText>
    </div>
  )
}

export default Represent
