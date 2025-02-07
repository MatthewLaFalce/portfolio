import { Background } from "@/once-ui/components";

export default function CenterLeftNeutralBackground() {
  return (
    <Background
    mask={{
      x: 0,
      y: 48,
    }}
    position="absolute"
    grid={{
      display: true,
      width: "0.25rem",
      color: "neutral-alpha-medium",
      height: "0.25rem",
    }}
  />
  );
}