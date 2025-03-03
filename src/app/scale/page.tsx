import scaleImg from "public/scale.jpg";
import Hero from "@/components/Hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imageAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
}
