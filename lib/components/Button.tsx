import type { HTMLAttributes, ReactNode } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

const ButtonKind = {
  pink: "btn-pink",
  secondary: "btn-secondary",
  white: "btn-white",
} as const;

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  kind?: keyof typeof ButtonKind;
}

interface ButtonLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  kind?: keyof typeof ButtonKind;
}

export type ButtonRef = HTMLButtonElement;
export type ButtonLinkRef = HTMLAnchorElement;

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ className, children, kind, ...props }, ref) => {
    const classes = classnames("btn", kind && ButtonKind[kind], className);

    return (
      <button {...props} ref={ref} className={classes}>
        {children}
      </button>
    );
  }
);

export const ButtonLink = forwardRef<ButtonLinkRef, ButtonLinkProps>(
  ({ className, children, kind, ...props }, ref) => {
    const classes = classnames("btn", kind && ButtonKind[kind], className);

    return (
      <a {...props} ref={ref} className={classes}>
        {children}
      </a>
    );
  }
);

Button.displayName = "Button";
ButtonLink.displayName = "ButtonLink";
