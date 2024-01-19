import React from "react";
import { KeyFeatures } from "../../components/KeyFeatures";

export const OurProduct = () => {
  return (
    <div className="flex flex-col items-center gap-[60px] px-0 py-[60px] relative">
      <div className="flex flex-col items-center gap-[24px] px-[120px] py-0 self-stretch w-full relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[8px] p-[8px] relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-0.49px] rotate-[-0.17deg] [font-family:'Kanit',Helvetica] font-semibold text-transparent text-[56px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
            <span className="text-white">Our</span>
            <span className="text-[#fecc00]"> Products</span>
          </p>
          <img
            className="absolute top-[62px] -right-px w-[177px] h-[22px]"
            alt="Vector"
            src="https://c.animaapp.com/KXSEpLo7/img/vector-1@2x.png"
          />
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-white text-[20px] text-center tracking-[0] leading-[33.9px]">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>
      <div className="flex flex-wrap items-start justify-center gap-[48px_60px] px-[64px] py-0 self-stretch w-full relative flex-[0_0_auto]">
        <KeyFeatures
          body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
          className="!left-[unset] !top-[unset]"
          element2="https://c.animaapp.com/KXSEpLo7/img/4-4@2x.png"
          elementClassNameOverride="!object-cover"
          heading="Bita Marketplace"
          property1="default"
        />
        <KeyFeatures
          body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
          className="!left-[unset] !top-[unset]"
          element2="https://c.animaapp.com/KXSEpLo7/img/4-3@2x.png"
          elementClassNameOverride="!object-cover"
          heading="Bitadex"
          property1="default"
        />
        <KeyFeatures
          body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
          className="!left-[unset] !top-[unset]"
          element2="https://c.animaapp.com/KXSEpLo7/img/4-2@2x.png"
          elementClassNameOverride="!object-cover"
          heading="Bitabridge"
          property1="default"
        />
        <KeyFeatures
          body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
          className="!left-[unset] !top-[unset]"
          element2="https://c.animaapp.com/KXSEpLo7/img/4-1@2x.png"
          elementClassNameOverride="!object-cover"
          heading="Bitapad"
          property1="default"
        />
        <KeyFeatures
          body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
          className="!left-[unset] !top-[unset]"
          element2="https://c.animaapp.com/KXSEpLo7/img/4@2x.png"
          elementClassNameOverride="!object-cover"
          heading="BitaLend"
          property1="default"
        />
      </div>
    </div>
  );
};
