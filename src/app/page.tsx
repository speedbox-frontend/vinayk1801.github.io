'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/ui/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { BackToTop } from '@/components/ui/BackToTop';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

// Performance Optimization: Lazy load heavy 3D graphics and client widgets
const ParticleBackground = dynamic(
  () => import('@/components/3d/ParticleBackground').then((mod) => mod.ParticleBackground),
  { ssr: false }
);

const ChatbotWidget = dynamic(
  () => import('@/components/ui/ChatbotWidget').then((mod) => mod.ChatbotWidget),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatbotWidget />
    </main>
  );
}
