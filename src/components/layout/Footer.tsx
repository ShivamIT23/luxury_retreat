import { Link } from "react-router-dom";
import Button from "../common/Button";

function Footer() {
  return (
    <footer className="relative flex w-full h-fit flex-col bg-white border-t-4 border-[#285F69] px-4 py-12 sm:px-6 md:px-[5vw] md:py-16">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        <section className="grid w-full gap-10 text-[#BE8F00] crimson font-semibold text-sm leading-[140%] tracking-[0.2px] grid-cols-2 md:grid-cols-1 lg:max-w-xl lg:text-base">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#285F69] text-base font-bold sm:text-lg">Quick Links</h4>
            <Link to="/home" className="hover:text-[#285F69] transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#285F69] transition-colors duration-200">
              About Us
            </Link>
            <Link to="/destination" className="hover:text-[#285F69] transition-colors duration-200">
              Destinations
            </Link>
            <Link to="/contact" className="hover:text-[#285F69] transition-colors duration-200">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[#285F69] text-base font-bold sm:text-lg">Destinations</h4>
            <Link to="/uae" className="hover:text-[#285F69] transition-colors duration-200">
              UAE
            </Link>
            <Link to="/south-africa" className="hover:text-[#285F69] transition-colors duration-200">
              South Africa
            </Link>
            <Link to="/france" className="hover:text-[#285F69] transition-colors duration-200">
              France
            </Link>
            <Link to="/maldives" className="hover:text-[#285F69] transition-colors duration-200">
              Maldives
            </Link>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center gap-4">
          <img src="/logo.png" alt="Luxury Retreat logo" className="h-24 w-auto sm:h-32 lg:h-[160px]" loading="lazy" />
        </div>

        <section className="flex w-full max-w-lg flex-col gap-5 rounded-2xl px-6 py-8">
          <h4 className="crimson text-2xl font-semibold tracking-[0.2px] text-[#285F69] sm:text-3xl">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm leading-[150%] text-[#285F69] sm:text-base">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                <path
                  d="M12 21s-6.714-5.625-6.714-10.286A6.714 6.714 0 0 1 12 4a6.714 6.714 0 0 1 6.714 6.714C18.714 15.375 12 21 12 21Z"
                  stroke="#285F69"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="10.4" r="2.1" stroke="#285F69" strokeWidth="1.6" />
              </svg>
              <div className="jakarta text-[#BE8F00] font-medium">
                <p>NGI House</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
            <Button buttonText="google maps" className="w-fit px-5 py-2 text-sm uppercase" />
            <article className="flex flex-col gap-3 text-[#BE8F00] jakarta font-medium text-sm leading-[140%]">
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                    stroke="#285F69"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+971 055-566-8446</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                    stroke="#285F69"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>info.rep@luxuryretreat.com</span>
              </div>
              <div className="flex gap-3">
                <Button buttonText="email" className="px-5 py-2 text-sm uppercase" />
                <Button buttonText="whatsapp" className="px-5 py-2 text-sm uppercase" />
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className="mt-10 border-t border-[#E5E7EB] pt-4 text-center text-xs text-[#285F69] opacity-70 sm:text-sm">
        &copy; {new Date().getFullYear()} Luxury Retreat. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;
