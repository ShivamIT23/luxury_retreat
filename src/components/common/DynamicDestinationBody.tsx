import { Link } from "react-router-dom";

function DynamicDestinationBody({heading ="Maldives",heading2=`Luxury Experiences in ${heading}`,para,img,children}:{heading:string;heading2?:string;para:string;img:string;children:React.ReactNode}) {
  return (
    <section className="mt-[40px] mb-[120px] flex flex-col justify-center w-full h-fit px-[5vw] gap-8">
      <Link
        to="/destination"
        className="text-[#285F69] text-[20px] font-bold crimson leading-[120%] flex gap-0.5"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_82_149)">
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
        Back to all destinations
      </Link>
      <section className="flex px-8 gap-12">
        <section className="w-auto h-fit flex flex-col gap-4 justify-center">
          <h3 className="text-[#BE8F00] crimson font-bold leading-[120%] text-[24px] tracking-px">
            Welcome to {heading}
          </h3>
          <p className="text-[16px] leading-[120%] text-[#374151]">
            {para}
          </p>
          <div className="pt-[25px] flex flex-col gap-6">
            <h4 className="text-[#BE8F00] crimson font-bold leading-[120%] text-[24px] tracking-px">
              {heading2}
            </h4>
            <img
              src={img}
              alt={heading}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
        {children}
      </section>
    </section>
  );
}

export default DynamicDestinationBody;
