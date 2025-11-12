import BlurText from "@/components/ui/BlurText"
import { valuesData } from "../constant/values"

function OurValues() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="40" fill="#FEF3C7" />
            <path
              d="M45.7951 41.4834L48.3201 55.6934C48.3484 55.8607 48.3249 56.0327 48.2528 56.1863C48.1807 56.3399 48.0634 56.4679 47.9166 56.5531C47.7698 56.6382 47.6006 56.6766 47.4314 56.6629C47.2623 56.6493 47.1013 56.5843 46.9701 56.4767L41.0034 51.9984C40.7154 51.7832 40.3655 51.6669 40.0059 51.6669C39.6464 51.6669 39.2964 51.7832 39.0084 51.9984L33.0317 56.4751C32.9006 56.5825 32.7398 56.6473 32.5709 56.661C32.402 56.6746 32.2329 56.6364 32.0862 56.5515C31.9395 56.4666 31.8222 56.3389 31.7499 56.1856C31.6777 56.0323 31.6539 55.8606 31.6817 55.6934L34.2051 41.4834"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M40 43.3333C45.5228 43.3333 50 38.8561 50 33.3333C50 27.8104 45.5228 23.3333 40 23.3333C34.4772 23.3333 30 27.8104 30 33.3333C30 38.8561 34.4772 43.3333 40 43.3333Z"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "users":
        return (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="40" fill="#FEF3C7" />
            <path
              d="M46.6666 55V51.6667C46.6666 49.8986 45.9642 48.2029 44.714 46.9526C43.4637 45.7024 41.768 45 39.9999 45H29.9999C28.2318 45 26.5361 45.7024 25.2859 46.9526C24.0356 48.2029 23.3333 49.8986 23.3333 51.6667V55"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M46.6667 25.2134C48.0963 25.584 49.3624 26.4188 50.2662 27.5868C51.17 28.7548 51.6604 30.1899 51.6604 31.6667C51.6604 33.1436 51.17 34.5786 50.2662 35.7466C49.3624 36.9146 48.0963 37.7494 46.6667 38.12"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M56.6667 54.9999V51.6666C56.6656 50.1894 56.174 48.7545 55.269 47.5871C54.364 46.4196 53.097 45.5858 51.6667 45.2166"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.9999 38.3333C38.6818 38.3333 41.6666 35.3486 41.6666 31.6667C41.6666 27.9848 38.6818 25 34.9999 25C31.318 25 28.3333 27.9848 28.3333 31.6667C28.3333 35.3486 31.318 38.3333 34.9999 38.3333Z"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "heart":
        return (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="40" fill="#FEF3C7" />
            <path
              d="M51.6666 43.3333C54.1499 40.9 56.6666 37.9833 56.6666 34.1667C56.6666 31.7355 55.7008 29.4039 53.9817 27.6849C52.2626 25.9658 49.9311 25 47.4999 25C44.5666 25 42.4999 25.8333 39.9999 28.3333C37.4999 25.8333 35.4333 25 32.4999 25C30.0688 25 27.7372 25.9658 26.0181 27.6849C24.299 29.4039 23.3333 31.7355 23.3333 34.1667C23.3333 38 25.8333 40.9167 28.3333 43.3333L39.9999 55L51.6666 43.3333Z"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "globe":
        return (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="80" height="80" rx="40" fill="#FEF3C7" />
            <path
              d="M39.9999 56.6666C49.2047 56.6666 56.6666 49.2047 56.6666 39.9999C56.6666 30.7952 49.2047 23.3333 39.9999 23.3333C30.7952 23.3333 23.3333 30.7952 23.3333 39.9999C23.3333 49.2047 30.7952 56.6666 39.9999 56.6666Z"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.9999 23.3333C35.7203 27.8268 33.3333 33.7945 33.3333 39.9999C33.3333 46.2054 35.7203 52.173 39.9999 56.6666C44.2795 52.173 46.6666 46.2054 46.6666 39.9999C46.6666 33.7945 44.2795 27.8268 39.9999 23.3333Z"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3333 40H56.6666"
              stroke="#D97706"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="mx-auto flex w-full h-fit max-w-[calc(1300px+10vw)] flex-col items-center px-4 pb-16 pt-12 sm:px-6 md:px-[5vw] md:pt-16 md:pb-[100px]">
      {/* Header */}
      <div className="flex max-w-[900px] flex-col items-center gap-4 pb-6 text-center">
        <BlurText text={valuesData.title} className="text-3xl sm:text-4xl lg:text-[48px]" />
        <p className="text-sm sm:text-base lg:text-[24px] leading-[150%] tracking-[0.5px] text-[#1E1E1E]">
          {valuesData.subtitle}
        </p>
      </div>

      {/* Values Cards */}
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {valuesData.values.map((value, index) => (
          <article
            key={index}
            className="flex h-full min-h-[280px] flex-col items-center gap-5 rounded-[12px] bg-white p-6 text-center shadow-md transition-shadow hover:shadow-lg sm:p-8"
          >
            <div className="flex items-center justify-center">{getIcon(value.icon)}</div>
            <h3 className="crimson text-base font-bold uppercase tracking-[1px] text-[#BE8F00] sm:text-[16px]">
              {value.title}
            </h3>
            <p className="text-sm leading-[140%] tracking-[0.5px] text-[#4B5563] sm:text-[14px]">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OurValues
