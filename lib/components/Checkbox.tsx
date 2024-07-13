import type { InputHTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type CheckboxRef = HTMLInputElement;
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ className, ...props }, ref) => {
    const classes = classnames("checkbox", className);

    return <input {...props} type="checkbox" ref={ref} className={classes} />;
  }
);

Checkbox.displayName = "Checkbox";
