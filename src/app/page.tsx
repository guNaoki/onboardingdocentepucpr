'use client';

import { useRef, useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Guides from '@/components/sections/Guides';
import Documents from '@/components/sections/Documents';
import UpcomingMeetings from '@/components/sections/UpcomingMeetings';
import NewsMosaic from '@/components/sections/NewsMosaic';
import Support from '@/components/sections/Support';
import JitAcesso from '@/components/sections/JitAcesso';
import { FadeIn } from '@/components/ui/MotionWrapper';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(650);

  useEffect(() => {
    if (!heroRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeroHeight(entry.target.clientHeight);
      }
    });
    resizeObserver.observe(heroRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-transparent pb-8">
      {/* Full-Bleed Hero Background Image (covers full screen width behind sidebar) */}
      <div 
        className="absolute top-0 left-0 right-0 bg-cover bg-center pointer-events-none -z-10"
        style={{ 
          backgroundImage: "url('/images/PucpR campus.jpeg')",
          height: `${heroHeight}px`
        }}
      >
        {/* Backdrop Overlay for blur and readability */}
        <div className="absolute inset-0 bg-white/35 dark:bg-black/55 backdrop-blur-[2px]"></div>
        
        {/* Smooth transition gradient to the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-bg-light/50 to-bg-light" />
      </div>

      {/* Hero Section Content Wrapper */}
      <div ref={heroRef} className="relative w-full pt-8 pb-20 mb-8 z-10">
        
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Hero - 8 columns */}
            <div className="md:col-span-8 flex flex-col justify-stretch">
              <Hero />
            </div>

            {/* JIT Access - 4 columns - Highest Priority */}
            <div className="md:col-span-4">
              <FadeIn delay={0.2} className="h-full">
                <JitAcesso />
              </FadeIn>
            </div>

            {/* Guides - 12 columns - Full width for better focus */}
            <div className="md:col-span-12">
              <div className="h-full p-2 bg-white/45 dark:bg-gray-900/45 backdrop-blur-md rounded-[2rem] border border-white/20 dark:border-gray-800/35 shadow-sm">
                <Guides />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page (Documentos e Modelos and below) */}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Documents - 12 columns */}
          <div className="md:col-span-12">
            <Documents />
          </div>

          {/* Upcoming Meetings - 12 columns */}
          <div className="md:col-span-12">
            <UpcomingMeetings />
          </div>

          {/* News Mosaic - 12 columns */}
          <div className="md:col-span-12">
            <NewsMosaic />
          </div>

          {/* Support - 12 columns */}
          <div className="md:col-span-12">
            <Support />
          </div>

        </div>
      </div>
    </main>
  );
}
