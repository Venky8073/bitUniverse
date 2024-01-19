import React from "react";
import { ButtonDarkText } from "../../components/ButtonDarkText/ButtonDarkText";

export const NavBar = () => {
  return (
    <div className="flex w-[1360px] items-center justify-between px-[32px] py-[16px] relative bg-[#5b4f0570] rounded-[16px] border border-solid border-transparent">
      <div className="inline-flex h-[56px] items-center justify-center gap-[8.51px] relative flex-[0_0_auto]">
        <img
          className="relative w-[55.29px] h-[55.29px]"
          alt="Logo yellow"
          src="https://c.animaapp.com/8XakfTh0/img/logo-yellow-1@2x.png"
        />
        <div className="inline-flex flex-col items-center justify-center gap-[7.2px] relative flex-[0_0_auto]">
          <div className="relative w-[97px] h-[12px] shadow-[0px_4px_4px_#00000040]">
            <div className="absolute -top-px left-0 [font-family:'Inter',Helvetica] font-bold text-[#ffc603] text-[16px] tracking-[2.56px] leading-[normal] whitespace-nowrap">
              BITVERSE
            </div>
          </div>
          <div className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-white text-[8.7px] tracking-[10.21px] leading-[normal] whitespace-nowrap">
            FINANCE
          </div>
        </div>
      </div>
      <div className="inline-flex items-center gap-[32px] relative flex-[0_0_auto]">
        <div className="inline-flex items-center justify-end gap-[8px] relative flex-[0_0_auto]">
          <ButtonDarkText
            className="!left-[unset] !justify-center !flex-[0_0_auto] !items-center !bg-[unset] !top-[unset]"
            divClassName="!text-white !text-[18px] !font-medium ![font-family:'Inter',Helvetica]"
            property="hover-active"
            property1="primary"
            rectangleClassName="!bg-[#554700]"
            stateProp="default"
            text="About"
            visible={false}
          />
          <ButtonDarkText
            className="!left-[unset] !justify-center !flex-[0_0_auto] !items-center !bg-[unset] !top-[unset]"
            divClassName="!text-white !text-[18px] !font-medium ![font-family:'Inter',Helvetica]"
            property="hover-active"
            property1="primary"
            rectangleClassName="!bg-[#554700]"
            stateProp="default"
            text="Our Products"
            visible={false}
          />
          <ButtonDarkText
            className="!left-[unset] !justify-center !flex-[0_0_auto] !items-center !bg-[unset] !top-[unset]"
            divClassName="!text-white !text-[18px] !font-medium ![font-family:'Inter',Helvetica]"
            property="hover-active"
            property1="primary"
            rectangleClassName="!bg-[#554700]"
            stateProp="default"
            text="Token Utility"
            visible={false}
          />
          <ButtonDarkText
            className="!left-[unset] !justify-center !flex-[0_0_auto] !items-center !bg-[unset] !top-[unset]"
            divClassName="!text-white !text-[18px] !font-medium ![font-family:'Inter',Helvetica]"
            property="hover-active"
            property1="primary"
            rectangleClassName="!bg-[#554700]"
            stateProp="default"
            text="Roadmap"
            visible={false}
          />
        </div>
        <div className="relative w-[189px] h-[55px] mr-[-2.00px]">
          <div className="relative w-[187px] h-[55px] bg-[#f9d326] rounded-[10px]">
            <div className="absolute h-[17px] top-[19px] left-[28px] [font-family:'Inter',Helvetica] font-medium text-black text-[18px] tracking-[0] leading-[16.5px] whitespace-nowrap">
              Connect Wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
