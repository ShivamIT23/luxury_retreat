import { Link } from "react-router-dom";
import Button from "../common/Button";

function Footer() {
  return (
    <footer className="flex min-h-[455px] h-fit justify-between items-center bg-white border-t-4 border-[#285F69] px-[5vw] relative">
      <section className="flex flex-col justify-evenly crimson font-semibold text-[16px] tracking-[-1px] text-[#BE8F00] h-fit min-h-[455px] leading-[21px]">
        <section className="flex flex-col gap-4">
          <h4 className="text-[#285F69] font-bold text-[20px]">Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/contact">Contact</Link>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-[#285F69] font-bold text-[20px]">Destinations</h4>
          <Link to="/uae">UAE</Link>
          <Link to="/south-africa">South Africa</Link>
          <Link to="/france">France</Link>
          <Link to="/maldives">Maldives</Link>
        </section>
      </section>
      <img src="/logo.png" alt="Logo" className="h-[200px] w-auto absolute top-1/2 left-1/2 -translate-1/2" />
      <section className="flex flex-col gap-5 justify-center min-w-[280px] max-w-[300px] w-full">
        <h4 className="text-[#285F69] -tracking-px leading-[21px] crimson font-semibold text-[32px]">
          Get in Touch
        </h4>
        <div className="flex items-center gap-2 text-[15px]">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 21s-6.714-5.625-6.714-10.286A6.714 6.714 0 0 1 12 4a6.714 6.714 0 0 1 6.714 6.714C18.714 15.375 12 21 12 21Z"
              stroke="#285F69"
              strokeWidth="1.8"
            />
            <circle
              cx="12"
              cy="10.4"
              r="2.1"
              stroke="#285F69"
              strokeWidth="1.8"
            />
          </svg>
          <div className="text-[#BE8F00] font-medium jakarta leading-[120%]">
            <p>Address: NGI House</p>
            <p>Dubai, United Arab Emirates</p>
          </div>
        </div>
        <Button buttonText="google maps" className="w-fit" />
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
            <Button buttonText="email" />
            <Button buttonText="whatsapp" />
          </div>
        </article>
        <div className="pt-2 border-t border-[#e5e7eb] mt-2 text-xs text-[#285F69] opacity-70">
          &copy; {new Date().getFullYear()} Luxury Retreat. All rights reserved.
        </div>
      </section>
    </footer>
  );
}

export default Footer;
