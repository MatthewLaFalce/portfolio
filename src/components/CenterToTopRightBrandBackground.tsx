import { Background } from "@/once-ui/components";

export default function CenterToTopRightBrandBackground() {
  return (
    <Background
    mask={{
      x: 100,
      y: 0,
      radius: 100,
    }}
    position="absolute"
    gradient={{
      display: true,
      opacity: 100,
      tilt: -35,
      height: 20,
      width: 120,
      x: 120,
      y: 35,
      colorStart: "brand-solid-strong",
      colorEnd: "static-transparent",
    }}
  />  );
}