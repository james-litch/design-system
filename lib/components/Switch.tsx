import type { HTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type SwitchRef = HTMLInputElement;
interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
}

export const Switch = forwardRef<SwitchRef, SwitchProps>(
  ({ className, ...props }, ref) => {
    const classes = classnames("switch", className);

    return (
      <input
        {...props}
        type="checkbox"
        role="switch"
        ref={ref}
        className={classes}
      />
    );
  }
);

Switch.displayName = "Switch";
