import BlurText from "@/components/ui/BlurText";
import { partnersData } from "../constant/partners";

function Partners() {
  return (
    <section className="w-full bg-[#E4E1DD] h-fit px-[5vw] max-w-[calc(1300px+10vw)] mx-auto pt-[70px] pb-[240px] flex flex-col items-center">
      <BlurText text={partnersData.title} className="text-[48px]" />
      <p className="text-[#4B5563] text-[16px] leading-[24px] tracking-[0%]">
        {partnersData.subtitle}
      </p>
        <div className="grid grid-cols-3 gap-8 w-full mt-[40px]">
          {partnersData.partners.map((partner, index) => (
            <article
              key={index}
              className="bg-white rounded-[8px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col items-center justify-evenly h-full p-12"
            >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className=" w-auto h-16 object-contain"
                />

              {/* Partner Info */}
              <div className="p-6 flex flex-col gap-3 grow items-center">
                <BlurText text={partner.name} className="text-[20px] leading-[28px] tracking-0" />
                <p className="text-[#4B5563] text-[16px] leading-[24px] text-center tracking-[0%] font-normal">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}

export default Partners;
