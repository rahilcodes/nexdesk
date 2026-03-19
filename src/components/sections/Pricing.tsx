'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-50 text-black relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Simple & <br/>
              <span className="text-accent-red">Transparent</span> Pricing.
            </h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed font-light">
              We believe in clear pricing with no hidden fees. Get access to a premium workspace that scales with your ambition.
            </p>

            <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-xl relative overflow-hidden group">
              <div className="absolute left-0 top-0 w-1 h-full bg-amber-500" />
              <div className="flex items-start gap-4">
                <Info className="text-amber-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <h4 className="font-semibold text-amber-900 mb-3 text-lg">Important Details</h4>
                  <ul className="space-y-3 text-sm text-amber-800/80">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span><strong className="text-amber-900">Security Deposit:</strong> 3 Months</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                      <span><strong className="text-amber-900">No onboarding fees</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                      <span className="font-semibold text-amber-900">Pre-booking required to confirm your seat</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="relative overflow-hidden border-accent-red shadow-[0_20px_50px_rgba(230,57,70,0.15)] p-10 bg-white w-full max-w-lg lg:scale-105 transform transition-transform hover:scale-[1.07] z-20">
              <div className="absolute top-0 right-0 bg-accent-red text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg tracking-wider uppercase shadow-md">
                Launch Offer
              </div>
              
              <h3 className="text-3xl font-bold mb-2 tracking-tight">Dedicated Seat</h3>
              <p className="text-zinc-500 mb-6 font-medium text-lg">Perfect for focused work & teams</p>
              
              <div className="mb-6 pb-6 border-b border-zinc-100">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-6xl font-black tracking-tighter text-black">₹5,999</span>
                  <span className="text-zinc-400 font-medium text-xl">/mo</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg text-zinc-400 line-through decoration-accent-red/60 decoration-2">₹7,999/mo</span>
                  <span className="text-xs bg-red-100 text-accent-red font-bold px-3 py-1 rounded-full border border-red-200">Launch Offer</span>
                </div>
              </div>

              <div className="text-xs text-zinc-400 mb-6 font-bold tracking-widest uppercase bg-zinc-50 inline-block px-3 py-1 rounded-md">Excluding GST</div>

              <div className="space-y-5 mb-8">
                {['24/7 Access', 'High-Speed WiFi', 'Free Conference Room Usage', 'Pantry Access'].map((feat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-1 shadow-sm">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-700 font-semibold text-lg tracking-wide">{feat}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full text-lg h-14 font-extrabold tracking-wide shadow-xl bg-accent-red hover:bg-black transition-colors" onClick={() => window.location.href = '#contact'}>
                Claim Your Seat
              </Button>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
