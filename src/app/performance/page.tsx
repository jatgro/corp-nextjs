import performanceImg from "public/performance.jpg";
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imageAlt="welding"
      title="We serve High Performance Applications"
    />
  );
}
