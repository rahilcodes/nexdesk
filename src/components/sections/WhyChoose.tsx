'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { MapPin, Tag, Clock, Users, ShieldCheck } from 'lucide-react';

const reasons = [
  { title: 'Prime Kondapur Location', icon: MapPin },
  { title: 'Affordable Premium Pricing', icon: Tag },
  { title: '24/7 Access', icon: Clock },
  { title: 'Free Conference Room Usage', icon: Users },
  { title: 'Professional Environment', icon: ShieldCheck },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Why Choose NEXDESK?</h2>
            <p className="text-xl text-zinc-400 font-light mb-8 leading-relaxed">
              We've created a space that balances premium aesthetics with affordable pricing, giving you the perfect environment to grow your business without compromising on quality.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl hover:bg-zinc-800 transition-colors">
                  <div className="w-12 h-12 bg-accent-red/10 text-accent-red rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <span className="text-lg font-semibold">{reason.title}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
