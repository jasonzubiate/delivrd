import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Labels from "@/components/Labels";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Labels />
      <Contact/>
    </main>
  );
}
