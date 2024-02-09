// const { cn } = require("@/lib/utils");
import {cn} from "@/lib/utils";
import React from 'react'

const MaxWidthWrapper = ({ className, children }) => {
  return (
    React.createElement("div", { className: cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className) },
      children
    )
  );
};

export default MaxWidthWrapper;
