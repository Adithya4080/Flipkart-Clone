import React from "react";

const sizes = {
  "5xl": "text-[34px] font-medium",
  xs: "text-[10px] font-medium",
  lg: "text-sm font-medium",
  "6xl": "text-[46px] font-normal leading-[54px]",
  "7xl": "text-[57px] font-medium",
  s: "text-xs font-medium",
  "2xl": "text-base font-medium",
  "3xl": "text-lg font-medium",
  "4xl": "text-[19px] font-medium leading-6",
  xl: "text-[15px] font-medium",
  md: "text-[13px] font-medium",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
