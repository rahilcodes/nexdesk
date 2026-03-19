'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-white">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="/images/reception.png" 
          alt="Premium Coworking Space" 
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent-red/20 text-accent-red text-sm font-semibold tracking-wider mb-6 border border-accent-red/30">
            KONDAPUR'S PREMIUM COWORKING
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Build. Connect. <span className="text-accent-red">Grow.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Premium coworking spaces perfectly located at the prime intersection of Kondapur, Gachibowli, and Hi-Tech City, Hyderabad. Designed for freelancers, startups, and growing teams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" className="w-full sm:w-auto text-lg" onClick={() => window.location.href = '#contact'}>
              Schedule a Visit
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg bg-black/50 border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
              onClick={() => window.open('https://wa.me/919010185859?text=Hi%20I%20want%20to%20schedule%20a%20visit%20to%20NEXDESK', '_blank')}
            >
              WhatsApp Now
            </Button>
            <Button 
              size="lg" 
              variant="ghost" 
              className="w-full sm:w-auto text-lg text-white hover:bg-white/10"
              onClick={() => window.location.href = 'tel:+919010185859'}
            >
              Call Now
            </Button>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm md:text-base text-zinc-400 font-medium"
          >
            🔥 <span className="text-accent-red font-semibold">Limited seats available</span> – Book your spot today
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
