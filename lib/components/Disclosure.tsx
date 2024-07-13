import type { HTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

interface DisclosureProps extends HTMLAttributes<HTMLDetailsElement> {}
export type DisclosureRef = HTMLDetailsElement;

/**
 * A styled Disclosure component.
 *
 * usage:
 *
 * ```tsx
 * <Disclosure>
 *  <summary>Disclosure</summary>
 *  <p>Content</p>
 * </Disclosure>
 * ```
 */
export const Disclosure = forwardRef<DisclosureRef, DisclosureProps>(
  ({ className, children, ...props }, ref) => {
    const classes = classnames("disclosure", className);

    return (
      <details {...props} ref={ref} className={classes}>
        {children}
      </details>
    );
  }
);

Disclosure.displayName = "Disclosure";
