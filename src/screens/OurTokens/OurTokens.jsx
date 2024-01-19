import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
// import { ButtonBase } from "../../components/ButtonBase";

export const OurTokens = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    async function fetchData(){
      try{
        let api=await fetch('https://bituniverse.onrender.com/')
        let bitdata=await api.json()
        console.log(bitdata)
        setData(bitdata)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
  return (
    <div id="OurTokens" className="flex flex-col items-center gap-[60px] px-0 py-[60px] relative">
      <div className="flex flex-col items-center gap-[24px] px-[120px] py-0 self-stretch w-full relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[8px] p-[8px] relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-0.57px] rotate-[-0.17deg] [font-family:'Kanit',Helvetica] font-semibold text-transparent text-[56px] text-center tracking-[0] leading-[60px] whitespace-nowrap">
            <span className="text-[#ffffff]">Our</span>
            <span className="text-[#fecc00]"> Tokens</span>
          </p>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-[#ffffff] text-[20px] text-center tracking-[0] leading-[33.9px]">
          Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-[48px_60px] px-[64px] py-0 self-stretch w-full relative flex-[0_0_auto]">
        
        

        {data.map((el)=><div className="flex flex-col w-[314px] items-center relative rounded-[12px] backdrop-blur-[26px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26px)_brightness(100%)]">
          <div className="flex flex-col w-[314px] items-center gap-[24px] pt-[184px] pb-[40px] px-[8px] relative flex-[0_0_auto] bg-[#141411] rounded-[12px] border-[3px] border-solid border-transparent backdrop-blur-[26px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgb(249,211,38),rgba(249,211,38,0.2)_50.52%,rgb(249,211,38)_100%)_1]">
            <div className="flex flex-col w-[298px] items-center justify-center gap-[12px] px-[24px] py-0 relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#ffffff] text-[24px] tracking-[0.39px] leading-[normal]">
                {el.tokenName}
              </div>
              <div className="flex items-center justify-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  Symbol
                </div>
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  {el.symbol}
                </div>
              </div>
              <div className="flex items-center justify-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  Decimals
                </div>
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  {el.decimals}
                </div>
              </div>
              <div className="flex items-center justify-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  Market Cap
                </div>
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  {el.marketcap}
                </div>
              </div>
              <div className="flex items-center justify-center gap-[8px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  Chain
                </div>
                <div className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#cfcfcf] text-[16px] tracking-[0] leading-[22.4px]">
                  {el.chain}
                </div>
              </div>
            </div>
            <img
              className="absolute top-[40px] left-[calc(50.00%_-_56px)] w-[111px] h-[111px] object-cover"
              alt="Element"
              src={el.img}
            />
            <Button property1="default" text="Details" />
          </div>

        </div>)}
        
    </div>
    </div>
  );
};
