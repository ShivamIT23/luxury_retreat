import { Link } from "react-router-dom";

function DynamicDestinationBody({heading ="Maldives",heading2=`Luxury Experiences in ${heading}`,para,img,children}:{heading:string;heading2?:string;para:string;img:string;children:React.ReactNode}) {
  return (
    <section className="mt-8 sm:mt-10 md:mt-[40px] mb-12 sm:mb-16 md:mb-[120px] flex flex-col justify-center w-full h-fit px-4 sm:px-6 md:px-[5vw] gap-6 sm:gap-8">
      <Link
        to="/destination"
        className="text-[#285F69] text-base sm:text-lg md:text-[20px] font-bold crimson leading-[120%] flex items-center gap-1 sm:gap-2 hover:opacity-80 transition-opacity"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <g clipPath="url(#clip0_82_149)">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="#285F69"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_82_149">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="whitespace-nowrap">Back to all destinations</span>
      </Link>
      <section className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 gap-8 sm:gap-10 md:gap-12">
        <section className="w-full lg:w-auto h-fit flex flex-col gap-4 sm:gap-6 justify-center">
          <h3 className="text-[#BE8F00] crimson font-bold leading-[120%] text-xl sm:text-2xl md:text-[24px] tracking-[0.5px]">
            Welcome to {heading}
          </h3>
          <p className="text-sm sm:text-base md:text-[16px] leading-[140%] text-[#374151]">
            {para}
          </p>
          <div className="pt-6 sm:pt-[25px] flex flex-col gap-4 sm:gap-6">
            <h4 className="text-[#BE8F00] crimson font-bold leading-[120%] text-xl sm:text-2xl md:text-[24px] tracking-[0.5px]">
              {heading2}
            </h4>
            <img
              src={img}
              alt={heading}
              className="w-full h-auto object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </section>
        <div className="w-full lg:w-auto lg:shrink-0">
          {children}
        </div>
      </section>
    </section>
  );
}

export default DynamicDestinationBody;
