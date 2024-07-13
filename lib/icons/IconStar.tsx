import type { HTMLAttributes } from "react";

export function IconStar({ ...props }: HTMLAttributes<HTMLImageElement>) {
  const url = new URL("./star.png", import.meta.url).href;
  return <img loading="lazy" alt="star" {...props} src={url} />;
}
