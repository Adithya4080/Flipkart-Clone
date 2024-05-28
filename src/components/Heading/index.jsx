import React from "react";

const sizes = {
  "3xl": "text-[21px] font-bold",
  "2xl": "text-xl font-extrabold",
  xl: "text-lg font-bold leading-[22px]",
  "5xl": "text-[31px] font-bold",
  "4xl": "text-3xl font-extrabold",
  "7xl": "text-4xl font-bold",
  s: "text-xs font-bold",
  md: "text-[13px] font-bold",
  "6xl": "text-[33px] font-extrabold",
  xs: "text-[9px] font-bold",
  lg: "text-sm font-bold",
};

const Heading = ({ children, className = "", size = "xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
