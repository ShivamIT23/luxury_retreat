import Button from "@/components/common/Button";
import BlurText from "@/components/ui/BlurText";

function Form() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-[3vw] mt-8 sm:mt-10 md:mt-[40px] mb-12 sm:mb-16 md:mb-[80px] flex flex-col gap-4 sm:gap-6 justify-center mx-auto items-center max-w-[calc(1200px+6vw)]">
      <BlurText
        className="text-2xl sm:text-3xl md:text-[32px] uppercase font-normal text-center"
        text="contact us"
      />
      <section className="grid grid-cols-1 lg:grid-cols-2 h-fit w-full gap-0 shadow-lg rounded-lg overflow-hidden">
        <img
          src="/contact/form.webp"
          alt="Contact"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full object-cover order-1 lg:order-1"
          loading="lazy"
        />
        <article className="flex bg-[#ededed] text-[#474747] leading-[120%] tracking-[1.3px] text-sm sm:text-[14px] font-normal flex-col gap-4 sm:gap-6 h-fit pt-6 px-4 sm:px-6 min-h-full order-2">
          <h4 className="text-[#444444] text-xl sm:text-2xl leading-[140%] tracking-[0.2px]">
            We invite your bespoke inquiry
          </h4>
          <input
            type="text"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-3 sm:p-4 placeholder-[#474747] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE8F00]/50 transition-all"
            placeholder="NAME"
          />
          <input
            type="email"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-3 sm:p-4 placeholder-[#474747] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE8F00]/50 transition-all"
            placeholder="EMAIL"
          />
          <input
            type="tel"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-3 sm:p-4 placeholder-[#474747] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE8F00]/50 transition-all"
            placeholder="PHONE"
          />
          <textarea
            className="resize-none h-[140px] sm:h-[180px] w-full border border-[#BE8F00] bg-white rounded-[4px] p-3 sm:p-4 placeholder-[#474747] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#BE8F00]/50 transition-all"
            placeholder="MESSAGE"
          />
          <div className="flex flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-[#595959] text-sm sm:text-[16px] leading-[140%] font-normal jakarta">
            <p className="flex items-center gap-1.5 text-xs sm:text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4002 7.73331L11.3335 8.66664L7.40016 12.6C6.5335 13.4666 5.46683 13.8666 4.3335 13.8666C3.20016 13.8666 2.20016 13.4 1.3335 12.5333C-0.333171 10.8666 -0.333171 8.13331 1.3335 6.39998L6.06683 1.66664L6.1335 1.59998C7.40016 0.266642 9.5335 0.266642 10.8668 1.59998L10.9335 1.66664C12.2668 2.99998 12.2668 5.06664 10.9335 6.39998L6.3335 10.8C5.86683 11.2666 5.26683 11.5333 4.66683 11.6H4.46683C3.86683 11.6 3.3335 11.4 3.00016 11C2.5335 10.5333 2.3335 9.93331 2.40016 9.26664C2.46683 8.66664 2.7335 8.06664 3.20016 7.59998L6.86683 3.73331L7.80016 4.66664L4.1335 8.59998C3.86683 8.86664 3.7335 9.13331 3.7335 9.46664C3.7335 9.59998 3.7335 9.93331 3.9335 10.1333C4.1335 10.3333 4.40016 10.3333 4.60016 10.3333C4.86683 10.3333 5.20016 10.1333 5.46683 9.93331L10.0002 5.46664C10.8002 4.66664 10.8002 3.39998 10.0002 2.66664L9.9335 2.59998C9.1335 1.79998 7.86683 1.79998 7.06683 2.59998L6.60016 3.06664L2.26683 7.39998C1.06683 8.59998 1.06683 10.4666 2.26683 11.6C3.46683 12.7333 5.3335 12.8 6.46683 11.6L10.4002 7.73331Z"
                  fill="#7D7474"
                />
              </svg>
              Attach files
            </p>
            <p className="text-xs sm:text-[12px] tracking-[0.2px]">Attachments (0)</p>
          </div>
          <Button buttonText="send" className="w-full sm:w-fit mx-auto px-6 py-3 text-sm uppercase" />
        </article>
      </section>
    </section>
  );
}

export default Form;
