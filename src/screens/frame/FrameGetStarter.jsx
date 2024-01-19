import React from "react";
import { Button } from "../../components/Button";

export const FrameGetStarter = () => {
  return (
    <div className="flex flex-col w-[1024px] items-center justify-center gap-[40px] relative">
      <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#fcffe2] text-[24px] text-center tracking-[0] leading-[40.3px]">
        Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet
        sem in id eget nunc quam lacus tellus augue.
      </p>
      <div className="inline-flex items-start justify-center gap-[32px] relative flex-[0_0_auto]">
        <Button className="!flex-[0_0_auto]" property1="default" text="Get Started" />
      </div>
    </div>
  );
};
