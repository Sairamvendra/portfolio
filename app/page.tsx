import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { ProfileSummary } from '@/components/sections/ProfileSummary';
import { Experience } from '@/components/sections/Experience';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <ProfileSummary />
        <Experience />
        <VideoShowcase />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
