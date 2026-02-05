import Hero from '@/components/sections/Hero';
import Guides from '@/components/sections/Guides';
import Documents from '@/components/sections/Documents';
import NewsMosaic from '@/components/sections/NewsMosaic';
import Support from '@/components/sections/Support';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Guides />
      <Documents />
      <NewsMosaic />
      <Support />
      <Newsletter />
    </>
  );
}
