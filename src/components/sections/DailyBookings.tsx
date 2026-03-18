'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function DailyBookings() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-red opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Flexible Daily Pass Available</h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 max-w-2xl mx-auto">
              Ideal for freelancers & travelers. Experience our premium workspace for a day without any long-term commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14" onClick={() => window.open('https://wa.me/919966998665?text=Hi%20I%20want%20to%20book%20a%20Day%20Pass%20at%20NEXDESK', '_blank')}>
                Book a Day Pass
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 border-zinc-700 text-white hover:bg-white hover:text-black" onClick={() => window.location.href = '#contact'}>
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-zinc-500 mt-6 mt-1.5">* Pay-per-day workspace access subject to availability.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
