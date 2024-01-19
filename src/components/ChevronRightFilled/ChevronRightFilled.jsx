import React from "react";

export const ChevronRightFilled = ({
  className,
  chevronRightFilled = "https://c.animaapp.com/8XakfTh0/img/chevronrightfilled-1@2x.png",
}) => {
  return (
    <img
      className={`absolute w-full h-full top-0 left-0 ${className}`}
      alt="Chevron right filled"
      src={chevronRightFilled}
    />
  );
};
