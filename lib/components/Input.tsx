import type { InputHTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type InputRef = HTMLInputElement;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<InputRef, InputProps>(
  ({ className, ...props }, ref) => {
    const classes = classnames("input", className);

    return <input {...props} ref={ref} className={classes} />;
  }
);

Input.displayName = "Input";
