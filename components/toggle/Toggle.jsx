import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

const Toggle = () => {
  return (
    <Switch
      defaultSelected
      size="md"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className}  />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >      
    </Switch>
  )
}

export default Toggle