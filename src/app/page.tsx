import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Pricing from '@/components/sections/Pricing';
import WorkspaceTypes from '@/components/sections/WorkspaceTypes';
import DailyBookings from '@/components/sections/DailyBookings';
import Facilities from '@/components/sections/Facilities';
import Gallery from '@/components/sections/Gallery';
import WhyChoose from '@/components/sections/WhyChoose';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Facilities />
      <About />
      <Pricing />
      <WorkspaceTypes />
      <DailyBookings />
      <Gallery />
      <WhyChoose />
      <Location />
      <Contact />
      <FinalCTA />
    </main>
  );
}
