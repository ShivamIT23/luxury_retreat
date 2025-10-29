import Button from "./Button"

function DynamicDestinationSideCard({time,climate,languages,heading}:{time:string;climate:string;languages:string;heading:string}) {
  return (
    <article className="min-w-[375px] h-fit flex flex-col bg-[#FFF6EB] rounded-[8px] shadow-sm p-6 gap-6">
          <div className="pb-[13px] border-b border-[#D2DEFF]">
            <h3 className="font-bold text-[20px] leading-[28px] crimson text-[#285F69]">
              Destination Information
            </h3>
          </div>
          <div className="flex flex-col gap-4 pb-[24px] border-b border-[#D2DEFF]">
            <div className="flex gap-3 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.6665 1.66699V5.00033"
                  stroke="#285F69"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3335 1.66699V5.00033"
                  stroke="#285F69"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 3.33301H4.16667C3.24619 3.33301 2.5 4.0792 2.5 4.99967V16.6663C2.5 17.5868 3.24619 18.333 4.16667 18.333H15.8333C16.7538 18.333 17.5 17.5868 17.5 16.6663V4.99967C17.5 4.0792 16.7538 3.33301 15.8333 3.33301Z"
                  stroke="#285F69"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.5 8.33301H17.5"
                  stroke="#285F69"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col">
                <p className="crimson font-semibold text-[16px] leading-[24px] text-[#BE8F00]">Best Time to Visit</p>
                <p className="text-[#285F69] text-[16px] leading-[100%]">{time}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6665 3.33366V12.117C12.302 12.4839 12.7986 13.0502 13.0794 13.7281C13.3602 14.4061 13.4095 15.1577 13.2196 15.8665C13.0297 16.5753 12.6112 17.2016 12.029 17.6483C11.4469 18.095 10.7336 18.3371 9.99984 18.3371C9.26606 18.3371 8.55278 18.095 7.97063 17.6483C7.38849 17.2016 6.97 16.5753 6.78009 15.8665C6.59017 15.1577 6.63943 14.4061 6.92024 13.7281C7.20105 13.0502 7.6977 12.4839 8.33317 12.117V3.33366C8.33317 2.89163 8.50877 2.46771 8.82133 2.15515C9.13389 1.84259 9.55781 1.66699 9.99984 1.66699C10.4419 1.66699 10.8658 1.84259 11.1783 2.15515C11.4909 2.46771 11.6665 2.89163 11.6665 3.33366Z" stroke="#285F69" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <div className="flex flex-col">
                <p className="crimson font-semibold text-[16px] leading-[24px] text-[#BE8F00]">Climate</p>
                <p className="text-[#285F69] text-[16px] leading-[100%]">{climate}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z" stroke="#285F69" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.99984 1.66699C7.86003 3.91379 6.6665 6.89761 6.6665 10.0003C6.6665 13.103 7.86003 16.0869 9.99984 18.3337C12.1396 16.0869 13.3332 13.103 13.3332 10.0003C13.3332 6.89761 12.1396 3.91379 9.99984 1.66699Z" stroke="#285F69" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.6665 10H18.3332" stroke="#285F69" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <div className="flex flex-col">
                <p className="crimson font-semibold text-[16px] leading-[24px] text-[#BE8F00]">Languages</p>
                <p className="text-[#285F69] text-[16px] leading-[100%]">{languages}</p>
              </div>
            </div>
          </div>
          <div className="pt-[9px] flex flex-col gap-4 text-[#285F69]">
            <h4 className="crimson font-bold text-[18px] leading-[28px]">Ready to Experience {heading}?</h4>
            <p className="text-[16px] leading-[100%]">Contact our luxury travel specialists to create
            your bespoke itinerary.</p>
          </div>
          <Button buttonText="contact us" className="w-fit mx-auto" />
        </article>
  )
}

export default DynamicDestinationSideCard