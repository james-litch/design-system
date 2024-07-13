import type { SelectHTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type SelectRef = HTMLSelectElement;
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
}

export const Select = forwardRef<SelectRef, SelectProps>(
  ({ className, children, ...props }, ref) => {
    const classes = classnames("input", className);

    return (
      <select {...props} ref={ref} className={classes}>
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";
