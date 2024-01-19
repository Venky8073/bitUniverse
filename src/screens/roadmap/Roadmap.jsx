import React from "react";
import { RoadmapCard } from "../../components/RoadmapCard";

export const Roadmap = () => {
  return (
    <div id="RoadMap" className="flex flex-col max-w-[1600px] w-[1440px] items-start justify-center gap-[54px] px-0 py-[60px] relative bg-white [background:linear-gradient(180deg,rgb(254,204,0)_0%,rgb(254,204,0)_67.23%,rgb(14,14,14)_67.34%,rgba(14,14,14,0)_100%)]">
      <div className="inline-flex flex-col items-start gap-[12px] px-[112px] py-0 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Kanit',Helvetica] font-semibold text-black text-[56px] tracking-[0] leading-[normal]">
          Roadmap
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[8px] pt-[115px] pb-0 px-[80px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center relative self-stretch w-full flex-[0_0_auto] overflow-x-scroll">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-[28px] h-[28px] bg-[#fff0b5] rounded-[14px] rotate-180" />
            <img
              className="relative w-[29.5px] h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-90-4@2x.png"
            />
          </div>
          <RoadmapCard
            body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            descriptionClassName="!text-[#cfcfcf]"
            frameClassName="!mb-[-6.00px] !px-[28px] !py-0"
            heading="Initial Design and Development"
            img="https://c.animaapp.com/VV6o96AD/img/rectangle-2752-3@2x.png"
            number="01"
            phase="PHASE-1"
            rectangle="https://c.animaapp.com/VV6o96AD/img/rectangle-2753-4@2x.png"
            rectangleClassName="!left-[13px] !w-[170px]"
            subheading="Q4 2023"
          />
          <div className="flex w-[87px] items-center relative">
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-91-2@2x.png"
            />
            <div className="relative w-[28px] h-[28px] bg-[#fff0b5] rounded-[14px] rotate-180" />
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-90-4@2x.png"
            />
          </div>
          <RoadmapCard
            body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            descriptionClassName="!text-[#cfcfcf]"
            divClassName="!left-[56px]"
            divClassNameOverride="!left-[56px]"
            heading="Release and Testing of&nbsp;&nbsp;Bita Market &amp; Bridge"
            img="https://c.animaapp.com/VV6o96AD/img/rectangle-2752-3@2x.png"
            number="02"
            phase="PHASE-2"
            rectangle="https://c.animaapp.com/VV6o96AD/img/rectangle-2753-4@2x.png"
            rectangleClassName="!left-[13px] !w-[170px]"
            subheading="Q1 2024"
          />
          <div className="flex w-[87px] items-center relative">
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-91-2@2x.png"
            />
            <div className="relative w-[28px] h-[28px] bg-[#fff0b5] rounded-[14px] rotate-180" />
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-90-4@2x.png"
            />
          </div>
          <RoadmapCard
            body="Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            descriptionClassName="!text-[#cfcfcf]"
            divClassName="!left-[55px]"
            divClassNameOverride="!left-[56px]"
            heading={
              <>
                Bitapad &amp; <br />
                Rollout
              </>
            }
            img="https://c.animaapp.com/VV6o96AD/img/rectangle-2752-3@2x.png"
            number="03"
            phase="PHASE-3"
            rectangle="https://c.animaapp.com/VV6o96AD/img/rectangle-2753-4@2x.png"
            rectangleClassName="!left-[13px] !w-[170px]"
            subheading="Q2 2024"
          />
          <div className="flex w-[87px] items-center relative">
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-91-2@2x.png"
            />
            <div className="relative w-[28px] h-[28px] bg-[#fff0b5] rounded-[14px] rotate-180" />
            <img
              className="relative flex-1 grow h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-90-4@2x.png"
            />
          </div>
          <RoadmapCard
            body={
              <>
                Design and Development of NakaLend
                <br />
                Beta and Mainnet Release of NakaLend
              </>
            }
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            divClassName="!left-[54px]"
            divClassNameOverride="!left-[56px]"
            heading={
              <>
                Launch of <br />
                NakaLend
              </>
            }
            img="https://c.animaapp.com/VV6o96AD/img/rectangle-2752-3@2x.png"
            number="04"
            phase="PHASE-4"
            rectangle="https://c.animaapp.com/VV6o96AD/img/rectangle-2753-4@2x.png"
            rectangleClassName="!left-[13px] !w-[170px]"
            subheading="Q3 2024"
          />
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <img
              className="relative w-[29.5px] h-px"
              alt="Vector"
              src="https://c.animaapp.com/VV6o96AD/img/vector-91-2@2x.png"
            />
            <div className="relative w-[28px] h-[28px] bg-[#fff0b5] rounded-[14px] rotate-180" />
          </div>
        </div>
      </div>
    </div>
  );
};
