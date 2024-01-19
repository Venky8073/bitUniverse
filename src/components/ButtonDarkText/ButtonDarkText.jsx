import React from "react";
import { useReducer } from "react";
import { ChevronRightFilled } from "../ChevronRightFilled/ChevronRightFilled";

export const ButtonDarkText = ({
  property1,
  stateProp,
  property,
  className,
  rectangleClassName,
  divClassName,
  text = "Ouvrir mon compte",
  visible = true,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "primary",
    state: stateProp || "default",
    property: property || "hover-active",
  });

  return (
    <div
      className={`left-[16px] inline-flex items-start gap-[10.55px] pl-[24px] pr-[24.2px] pt-[15px] pb-[16.5px] overflow-hidden rounded-[16px] bg-white relative ${
        state.state === "hover" ? "top-[80px]" : state.state === "active" ? "top-[145px]" : "top-[16px]"
      } ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      <div
        className={`w-[100.12%] top-0 h-[49px] absolute ${
          state.state === "active" ? "[background:linear-gradient(180deg,rgb(144,18,252)_0%,rgb(171,1,218)_100%)]" : ""
        } ${state.state === "default" ? "left-[-100.62%]" : "left-0"} ${
          ["default", "hover"].includes(state.state) ? "bg-[#303030]" : ""
        } ${rectangleClassName}`}
      />
      <div
        className={`[font-family:'Outfit',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[15px] relative whitespace-nowrap leading-[16.5px] ${
          state.state === "default" ? "text-[#303030]" : "text-white"
        } ${state.state === "active" ? "font-semibold" : "font-normal"} ${divClassName}`}
      >
        {text}
      </div>
      {visible && (
        <ChevronRightFilled
          chevronRightFilled={
            state.state === "hover"
              ? "https://c.animaapp.com/8XakfTh0/img/chevronrightfilled-3@2x.png"
              : state.state === "active"
              ? "https://c.animaapp.com/8XakfTh0/img/chevronrightfilled-2@2x.png"
              : "https://c.animaapp.com/8XakfTh0/img/chevronrightfilled@2x.png"
          }
          className="!h-[16px] !relative !left-[unset] !w-[16px] !top-[unset]"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}
