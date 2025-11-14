import { useNavigate } from "react-router-dom";
import Button from "./Button";

function DestinationCard({img,heading,para,link}:{img?:string;heading?:string;para?:string;link?:string}) {
  const navigate = useNavigate();
  return (
    <article
      className="text-white h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_30%,rgba(0,0,0,0.45)_53.1%,rgba(0,0,0,0.72)_100%)] relative h-fit"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <img
        src={img?img:"/destinationCard/maldives.webp"}
        alt={heading?heading:"Maldives"}
        className="relative w-full h-auto -z-1"
        itemProp="image"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 p-3 flex flex-col justify-end gap-0 max-h-full max-w-[402px]">
        <h2 className="flex items-center gap-2 crimson font-bold text-2xl leading-[120%] tracking-[1px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_2307)">
              <rect
                x="4"
                width="32"
                height="32"
                rx="16"
                fill="url(#paint0_linear_1_2307)"
              />
              <path
                d="M25.3333 14.6667C25.3333 17.9954 21.6407 21.462 20.4007 22.5327C20.2851 22.6196 20.1445 22.6665 20 22.6665C19.8555 22.6665 19.7148 22.6196 19.5993 22.5327C18.3593 21.462 14.6667 17.9954 14.6667 14.6667C14.6667 13.2522 15.2286 11.8957 16.2288 10.8955C17.229 9.89528 18.5855 9.33337 20 9.33337C21.4145 9.33337 22.771 9.89528 23.7712 10.8955C24.7714 11.8957 25.3333 13.2522 25.3333 14.6667Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 16.6666C21.1046 16.6666 22 15.7712 22 14.6666C22 13.5621 21.1046 12.6666 20 12.6666C18.8954 12.6666 18 13.5621 18 14.6666C18 15.7712 18.8954 16.6666 20 16.6666Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2307"
                x="0"
                y="0"
                width="40"
                height="40"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2307"
                />
                <feBlend
                  mode="normal"
                  in="BackgroundImageFix"
                  in2="effect1_dropShadow_1_2307"
                  result="BackgroundImageFix"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_2307"
                x1="30.5"
                y1="3.5"
                x2="9"
                y2="26.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BE8F00" />
                <stop offset="1" stop-color="#E4AD0A" />
              </linearGradient>
            </defs>
          </svg>
          {heading?heading:'Maldives'}
        </h2>
        <p itemProp="description" className="tracking-[1.3px] font-[14px] leading-[120%] mb-1">
          {para?para:`Discover paradise on Earth with pristine beaches and crystal-clear
          waters.`}
        </p>
        <Button handleClick={()=> link && navigate(link)} buttonText="Explore" className="w-fit flex bg-[#BE8F00] p-2 py-2 mt-1" />
      </div>
      <meta itemProp="author" content="Shivam Gupta" />
      <meta itemProp="datePublished" content="2025-10-27" />
    </article>
  );
}

export default DestinationCard;
