import type { HTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  open?: boolean;
}
export type ModalRef = HTMLDialogElement;

export const Modal = forwardRef<ModalRef, ModalProps>(
  ({ className, children, ...props }, ref) => {
    const classes = classnames("modal", className);

    return (
      <dialog {...props} ref={ref} className={classes}>
        {children}
      </dialog>
    );
  }
);

Modal.displayName = "Modal";
