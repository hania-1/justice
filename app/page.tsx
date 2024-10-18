'use client';

import Hero from "@/components/Hero";
// import Case from "@/components/Case";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Protection from "@/components/Protection";
import Case from "@/components/Case";
import Selfdefence from "@/components/Selfdefence";
import Ending from "@/components/Ending";
import Mission from "@/components/Mission";
import Nav from "@/components/Nav";
import Projectsection from "@/components/Projectsection";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  },[

  ]);
  return (
    <main className="flex min-h-screen flex-col bg-red-950">
      <Hero />
      <Case />
      <Projectsection />
      <Protection />
      <Selfdefence />
      <Ending />
      <Mission />
      <Nav />
    </main>
  );
}
