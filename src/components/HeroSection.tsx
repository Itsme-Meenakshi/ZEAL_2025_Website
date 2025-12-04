import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import wieLogo from '@/assets/logos/IEEE logo nobackground.png';
import ieeeLogo from '@/assets/logos/IEEE_WIE_White.png';
import mitsLogo from '@/assets/logos/mits_logo.png';
import sponsorLogo from '@/assets/logos/ieee sb logo white.png';

const HeroSection = () => {
  const scrollToTracks = () => {
    const section = document.getElementById('tracks');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Magical Particles */}
      <div className="magical-particles" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-7xl md:text-9xl font-black tracking-wider mb-2 text-glow mt-[50px]"
          style={{
            background:
              'linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ZEAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Zenith of Engineering and Leadership
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-secondary">
            <Calendar className="w-5 h-5" />
            <span className="font-body text-lg">January 5th, 2025</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2 text-secondary">
            <MapPin className="w-5 h-5" />
            <span className="font-body text-lg">
              Muthoot Institute of Technology & Science
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* REGISTER BUTTON → external website */}
          <a
            href="https://ieeesbmits.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="hero" size="xl" className="group">
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              Register Now
            </Button>
          </a>

          {/* EXPLORE TRACKS → scroll to section with id="tracks" */}
          <Button variant="outline" size="xl" onClick={scrollToTracks}>
            Explore Tracks
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 mt-[35px]"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-primary font-display text-sm tracking-widest uppercase">
            IEEE WIE AG MITS Initiative
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-20 mt-[100px]"
        >
          <img
            src={wieLogo}
            alt="IEEE WIE Logo"
            className="h-16 w-auto object-contain"
          />
          <img
            src={ieeeLogo}
            alt="IEEE Logo"
            className="h-16 w-auto object-contain"
          />
          <img
            src={mitsLogo}
            alt="MITS Logo"
            className="h-16 w-auto object-contain"
          />
          <img
            src={sponsorLogo}
            alt="Sponsor Logo"
            className="h-16 w-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
