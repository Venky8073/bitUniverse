import React from "react";

export const RoadmapCard = ({
  phase = "PHASE-1",
  number = "01",
  heading = "NakaMarketplace Launch",
  subheading = "(Design and Development)",
  body = "Initiating the creation of the BRC20 NFT marketplace. UI/UX design/Development and testing.",
  className,
  frameClassName,
  descriptionClassName,
  rectangle = "https://c.animaapp.com/VV6o96AD/img/rectangle-2753@2x.png",
}) => {
  return (
    <div className={`inline-flex flex-col h-[360px] items-center relative top-[-2430px] left-[-15908px] ${className}`}>
      <div className="inline-flex flex-col items-center gap-[24px] p-[24px] relative flex-1 grow bg-[#141721] rounded-[20px] overflow-hidden">
        <div className="inline-flex flex-col items-center gap-[24px] px-[16px] py-[36px] relative flex-1 grow bg-[#0d0e11] rounded-[16px] border-2 border-solid border-transparent shadow-[2px_2px_32px_#ffffff26] [border-image:linear-gradient(to_bottom,rgb(249,211,38),rgba(249,211,38,0.2)_50.52%,rgb(249,211,38)_100%)_1]">
          <div className="flex flex-col items-center gap-[6px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-bold text-white text-[24px] relative w-[319px] [font-family:'Inter',Helvetica] text-center tracking-[0] leading-[32px]">
              {heading}
            </div>
            <div className="font-semibold text-[#ffffff99] text-[20px] relative w-[319px] [font-family:'Inter',Helvetica] text-center tracking-[0] leading-[32px]">
              {subheading}
            </div>
          </div>
          <div className={`flex w-[319px] items-center gap-[8px] relative flex-[0_0_auto] ${frameClassName}`}>
            <p
              className={`relative flex-1 mt-[-1.00px] font-body-md-regular font-[number:var(--body-md-regular-font-weight)] text-[#e2e2e2] text-[length:var(--body-md-regular-font-size)] text-center tracking-[var(--body-md-regular-letter-spacing)] leading-[var(--body-md-regular-line-height)] [font-style:var(--body-md-regular-font-style)] ${descriptionClassName}`}
            >
              {body}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[-129px] left-[24px] w-[351px] h-[170px]">
        <div className="relative h-[170px]">
          <div className="absolute w-[351px] h-[129px] top-0 left-0 overflow-hidden">
            <div>
              {number}
            </div>
          </div>
          <div className="absolute w-[196px] h-[61px] top-[109px] left-[78px]">
            <div className="relative h-[61px]">
              <img className="absolute w-[196px] h-[20px] top-0 left-0" alt="Rectangle" src={rectangle} />
              <div
                className={`absolute top-[23px] left-[58px] [font-family:'Kanit',Helvetica] font-bold text-[#f7f6f6] text-[20px] text-center tracking-[0] leading-[normal] `}
              >
                {phase}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
