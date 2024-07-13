import type { TextareaHTMLAttributes } from "react";

import { forwardRef } from "react";
import { classnames } from "../utils/classnames";

export type TextAreaRef = HTMLTextAreaElement;
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<TextAreaRef, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const classes = classnames("input", className);

    return <textarea {...props} ref={ref} className={classes} />;
  }
);

TextArea.displayName = "TextArea";
