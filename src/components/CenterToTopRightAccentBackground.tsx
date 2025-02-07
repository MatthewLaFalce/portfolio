import { Background } from "@/once-ui/components";

export default function CenterToTopRightAccentBackground() {
  return (
    <Background
    mask={{
      x: 80,
      y: 0,
      radius: 100,
    }}
    position="absolute"
    gradient={{
      display: true,
      tilt: -35,
      height: 50,
      width: 75,
      x: 100,
      y: 40,
      colorStart: "accent-solid-medium",
      colorEnd: "static-transparent",
    }}
  />
  );
}