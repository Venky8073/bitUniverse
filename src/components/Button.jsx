import React from "react";
import { useReducer } from "react";
import { ArrowChevronRight } from "../components/ArrowChevronRight";

export const Button = ({ text = "Tokenomics", property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <button
      className={`all-[unset] box-border inline-flex flex-col items-start h-[55px] rounded-[12px] relative ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[background:linear-gradient(180deg,rgb(254,204,0)_0%,rgb(254,167.64,0)_100%)] inline-flex flex-col items-center p-[4px] h-[55px] rounded-[100px] justify-center relative ${
          state.property1 === "hover"
            ? "shadow-[2px_2px_20px_#fecc0040,-2px_-2px_20px_#fecc0040]"
            : "shadow-[2px_2px_20px_transparent,-2px_-2px_20px_transparent]"
        }`}
      >
        <div className="[background:linear-gradient(180deg,rgb(254,204,0)_0%,rgb(254,167.64,0)_100%)] border-2 border-solid border-white inline-flex items-center gap-[8px] flex-[0_0_auto] pl-[24px] pr-[20px] py-[10px] rounded-[100px] justify-center relative">
          <div className="[font-family:'Inter',Helvetica] w-fit mt-[-2.00px] tracking-[0] text-[16px] text-[#1c1c1c] font-bold text-center whitespace-nowrap leading-[27.1px] relative">
            {text}
          </div>
          <ArrowChevronRight />
        </div>
      </div>
    </button>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
