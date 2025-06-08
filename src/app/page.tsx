import Hero from "@/components/Hero/Hero";
import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import { WavyBackgroundDemo } from "@/components/ui/WavyBackgroundDemo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-bg-default h-screen">
      <Hero />
    </main>
  );
}
