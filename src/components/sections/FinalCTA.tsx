'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-accent-red text-white text-center px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">
            Ready to upgrade your workspace?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full bg-white text-accent-red hover:bg-zinc-100 shadow-xl" onClick={() => window.location.href = '#contact'}>
              Schedule a Visit
            </Button>
            <Button size="lg" className="w-full sm:w-auto h-16 px-10 text-xl font-bold rounded-full bg-black text-white hover:bg-zinc-900 shadow-xl border-none" onClick={() => window.open('https://wa.me/919010185859?text=Hi%20I%20want%20to%20schedule%20a%20visit%20to%20NEXDESK', '_blank')}>
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
