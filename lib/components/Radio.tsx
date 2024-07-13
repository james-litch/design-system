import type { InputHTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type RadioRef = HTMLInputElement;
interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Radio = forwardRef<RadioRef, RadioProps>(
  ({ className, ...props }, ref) => {
    const classes = classnames("radio", className);

    return <input {...props} type="radio" ref={ref} className={classes} />;
  }
);

Radio.displayName = "Radio";
