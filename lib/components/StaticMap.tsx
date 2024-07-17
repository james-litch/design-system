import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

interface Props extends Omit<ImageProps, "src"> {
  username?: string;
  styleId: string;

  latitude: number;
  longitude: number;
  zoom?: number;
  bearing?: number;
  pitch?: number;
  marker?: MarkerProps;
}

type MarkerProps = {
  color?: string;
  label?: string;
  latitude: number;
  longitude: number;
  size?: "s" | "l";
};

export function StaticMap({
  width = 400,
  height = 300,
  loading = "lazy",
  username = "scandotcom",
  styleId = "cl8wv327p004x15n2506gaeis",
  latitude,
  longitude,
  zoom = 14,
  marker,
  bearing,
  pitch,
  ...props
}: Props) {
  const urlParts = [
    "https://api.mapbox.com/styles/v1",
    username,
    styleId,
    "static",
    mapMarker(marker),
    mapSettings({ latitude, longitude, zoom, bearing, pitch }),
    mapSize({ width, height }),
  ]
    .filter(Boolean)
    .join("/");

  const url = `${urlParts}?access_token=${import.meta.env.STORYBOOK_MAPBOX_KEY}`;

  return <img loading={loading} src={url} {...props} />;
}

function mapMarker(marker?: MarkerProps | undefined) {
  if (!marker || !marker.latitude || !marker.longitude) return;
  const color = marker.color || "fea2bb";
  const size = marker.size || "s";

  return `pin-${size}+${color}(${marker.longitude},${marker.latitude})`;
}

function mapSettings(
  props: Pick<Props, "latitude" | "longitude" | "zoom" | "bearing" | "pitch">
) {
  return [
    props.longitude,
    props.latitude,
    props.zoom,
    props.bearing,
    props.pitch,
  ]
    .filter(Boolean)
    .join(",");
}

function mapSize({ width, height }: Pick<Props, "width" | "height">) {
  return `${width}x${height}`;
}
