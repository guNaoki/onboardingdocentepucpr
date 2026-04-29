import Hero from '@/components/sections/Hero';
import Guides from '@/components/sections/Guides';
import Documents from '@/components/sections/Documents';
import UpcomingMeetings from '@/components/sections/UpcomingMeetings';
import NewsMosaic from '@/components/sections/NewsMosaic';
import Support from '@/components/sections/Support';
import Newsletter from '@/components/sections/Newsletter';
import JitAcesso from '@/components/sections/JitAcesso';
import { FadeIn } from '@/components/ui/MotionWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero - 8 columns */}
          <div className="md:col-span-8">
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
            <div className="h-full p-2 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <Guides />
            </div>
          </div>

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

          {/* Support & Newsletter - 6 columns each */}
          <div className="md:col-span-6">
            <Support />
          </div>
          <div className="md:col-span-6">
            <Newsletter />
          </div>

        </div>
      </div>
    </main>
  );
}
