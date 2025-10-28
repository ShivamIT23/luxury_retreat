import Button from "@/components/common/Button";
import BlurText from "@/components/ui/BlurText";

function Form() {
  return (
    <section className="w-full px-[3vw] mt-[40px] mb-[80px] flex flex-col gap-3 justify-center mx-auto items-center max-w-[calc(1200px+6vw)]">
      <BlurText
        className="text-[32px] uppercase font-normal"
        text="contact us"
      />
      <section className="grid grid-cols-2 h-fit">
        <img
          src="/contact/form.png"
          alt="Contact"
          className="w-full h-full object-cover"
        />
        <article className="flex bg-[#ededed] text-[#474747] leading-[120%] tracking-[1.3px] text-[14px] font-normal flex-col gap-6 h-fit pt-6 px-6 min-h-full">
          <h4 className="text-[#444444] text-2xl leading-[27.5px] -tracking-px">
            We invite your bespoke inquiry
          </h4>
          <input
            type="text"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-4 placeholder-[#474747]"
            placeholder="NAME"
          />
          <input
            type="text"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-4 placeholder-[#474747]"
            placeholder="EMAIL"
          />
          <input
            type="text"
            className="border border-[#BE8F00] bg-white rounded-[4px] p-4 placeholder-[#474747]"
            placeholder="PHONE"
          />
          <textarea
            className="resize-none h-[180px] w-full border border-[#BE8F00] bg-white rounded-[4px] p-4 placeholder-[#474747]"
            placeholder="MESSAGE"
          />
          <div className="flex justify-between items-center text-[#595959] text-[16px] leading-[18px] font-normal jakarta">
            <p className="flex items-center gap-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4002 7.73331L11.3335 8.66664L7.40016 12.6C6.5335 13.4666 5.46683 13.8666 4.3335 13.8666C3.20016 13.8666 2.20016 13.4 1.3335 12.5333C-0.333171 10.8666 -0.333171 8.13331 1.3335 6.39998L6.06683 1.66664L6.1335 1.59998C7.40016 0.266642 9.5335 0.266642 10.8668 1.59998L10.9335 1.66664C12.2668 2.99998 12.2668 5.06664 10.9335 6.39998L6.3335 10.8C5.86683 11.2666 5.26683 11.5333 4.66683 11.6H4.46683C3.86683 11.6 3.3335 11.4 3.00016 11C2.5335 10.5333 2.3335 9.93331 2.40016 9.26664C2.46683 8.66664 2.7335 8.06664 3.20016 7.59998L6.86683 3.73331L7.80016 4.66664L4.1335 8.59998C3.86683 8.86664 3.7335 9.13331 3.7335 9.46664C3.7335 9.59998 3.7335 9.93331 3.9335 10.1333C4.1335 10.3333 4.40016 10.3333 4.60016 10.3333C4.86683 10.3333 5.20016 10.1333 5.46683 9.93331L10.0002 5.46664C10.8002 4.66664 10.8002 3.39998 10.0002 2.66664L9.9335 2.59998C9.1335 1.79998 7.86683 1.79998 7.06683 2.59998L6.60016 3.06664L2.26683 7.39998C1.06683 8.59998 1.06683 10.4666 2.26683 11.6C3.46683 12.7333 5.3335 12.8 6.46683 11.6L10.4002 7.73331Z"
                  fill="#7D7474"
                />
              </svg>
              Attach files
            </p>
            <p className="text-[12px] -mr-4 -tracking-px">Attachments (0)</p>
          </div>
          <Button buttonText="send" className="w-fit mx-auto" />
        </article>
      </section>
    </section>
  );
}

export default Form;
