import React from "react";
import { useReducer } from "react";

export const KeyFeatures = ({
  body = "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
  heading = "Product Management",
  property1,
  className,
  elementClassNameOverride,
  element2 = "https://c.animaapp.com/KXSEpLo7/img/4-6@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`w-[314px] flex flex-col left-[16px] items-center rounded-[12px] [-webkit-backdrop-filter:blur(26px)_brightness(100%)] backdrop-blur-[26px] backdrop-brightness-[100%] relative ${
        state.property1 === "variant-2" ? "top-[486px]" : "top-[16px]"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >

      <div className="[border-image:linear-gradient(to_bottom,rgb(249,211,38),rgba(249,211,38,0.2)_50.52%,rgb(249,211,38)_100%)_1] border-[3px] border-solid border-transparent w-[314px] flex flex-col items-center gap-[8px] flex-[0_0_auto] pt-[184px] pb-[56px] px-[8px] rounded-[12px] [-webkit-backdrop-filter:blur(26px)_brightness(100%)] bg-[#141411] backdrop-blur-[26px] backdrop-brightness-[100%] relative">
        <div className="w-[298px] flex flex-col items-center gap-[12px] flex-[0_0_auto] px-[24px] py-0 justify-center relative">
          <div className="[font-family:'Inter',Helvetica] self-stretch mt-[-1.00px] tracking-[0.39px] text-[20px] text-white font-bold text-center leading-[normal] relative">
            {heading}
          </div>
          <b className={`w-[171px] h-[2px] relative bg-amber-500`}></b>
          <p className="[font-family:'Inter',Helvetica] self-stretch tracking-[0] text-[16px] text-[#cfcfcf] font-normal text-center leading-[22.4px] relative">
            {body}
          </p>
        </div>
        <img
          className={`absolute ${state.property1 === "variant-2" ? "w-[210px]" : "w-[159px]"} ${
            state.property1 === "variant-2" ? "left-[calc(50.00%_-_105px)]" : "left-[calc(50.00%_-_80px)]"
          } ${state.property1 === "variant-2" ? "top-[-98px]" : "top-[16px]"} ${
            state.property1 === "variant-2" ? "h-[210px]" : "h-[159px]"
          } ${elementClassNameOverride}`}
          alt="Element"
          src={ element2}
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
