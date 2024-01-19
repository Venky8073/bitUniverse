import React from "react";

export const Frame = () => {
  return (
    <div className="w-[934px] h-[403px]">
      <div className="relative w-[769px] h-[353px] top-[33px] left-[45px]">
        <img
          className="absolute w-[720px] h-[184px] top-[10px] left-[12px]"
          alt="Your gateway to"
          src="https://c.animaapp.com/v4jUGwzX/img/your-gateway-to.png"
        />
        <img
          className="absolute w-[177px] h-[22px] top-[324px] left-[592px]"
          alt="Vector"
          src="https://c.animaapp.com/v4jUGwzX/img/vector-1@2x.png"
        />
        <p className="absolute h-[144px] top-[209px] left-[400px] [font-family:'Kanit',Helvetica] font-semibold  text-[100px]   ">
          {/* <span className="text-[#eff5fa]">DeFi ON</span> */}
          <span className="text-[#fecc00] left-[20px]">Bitcoin</span>
        </p>
        <img
          className="absolute w-[324px] h-[324px] top-0 left-[207px] object-cover"
          alt="Element"
          src="https://c.animaapp.com/v4jUGwzX/img/25778899-7148233-1@2x.png"
        />
        <div className="absolute h-[144px] top-[209px] [font-family:'Kanit',Helvetica] font-semibold text-[#eff5fa] text-[100px]  whitespace-nowrap">
          Defi ON
        </div>
      </div>
    </div>
  );
};
