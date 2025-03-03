import homeImg from "public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imageAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
