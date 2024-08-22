import type { HTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

const BadgeKind = {
  warning: "badge-warning",
  success: "badge-success",
  danger: "badge-danger",
} as const;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  kind?: keyof typeof BadgeKind;
}

export type BadgeRef = HTMLSpanElement;

export const Badge = forwardRef<BadgeRef, BadgeProps>(
  ({ className, children, kind, ...props }, ref) => {
    const classes = classnames("badge", kind && BadgeKind[kind], className);

    return (
      <span {...props} ref={ref} className={classes}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
