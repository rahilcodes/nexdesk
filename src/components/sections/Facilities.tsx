'use client';

import { motion } from 'framer-motion';
import { Monitor, Wifi, Zap, UserCheck, Coffee, Video, CarFront, Wind } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const facilities = [
  { 
    name: 'Furnished Workstations', 
    desc: 'Ergonomic chairs and spacious desks designed for maximum comfort and productivity.',
    icon: Monitor 
  },
  { 
    name: 'High-Speed WiFi', 
    desc: 'Enterprise-grade, seamless internet connectivity to keep your work flowing.',
    icon: Wifi 
  },
  { 
    name: 'Power Backup', 
    desc: '100% uninterrupted power supply ensuring zero downtime for your business.',
    icon: Zap 
  },
  { 
    name: 'Professional Reception', 
    desc: 'A dedicated front-desk team to greet your guests and handle your mail.',
    icon: UserCheck 
  },
  { 
    name: 'Modern Pantry', 
    desc: 'Fully stocked pantry area with unlimited premium coffee, tea, and water.',
    icon: Coffee 
  },
  { 
    name: 'CCTV Security', 
    desc: 'Round-the-clock surveillance and secure access for your peace of mind.',
    icon: Video 
  },
  { 
    name: 'Ample Parking', 
    desc: 'Dedicated and hassle-free parking spaces for you and your visitors.',
    icon: CarFront 
  },
  { 
    name: 'Centralized AC', 
    desc: 'Perfectly temperature-controlled environments for year-round comfort.',
    icon: Wind 
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-zinc-50/50 text-black border-y border-zinc-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
          >
            World-Class <span className="text-accent-red">Facilities.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 font-light"
          >
            Everything you need to do your best work, all under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col items-start text-left gap-5 hover:border-accent-red/30 hover:shadow-[0_8px_30px_rgb(230,57,70,0.12)] transition-all duration-500 group cursor-default border border-zinc-200/80 bg-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-accent-red group-hover:text-white group-hover:border-accent-red transition-all duration-300 shadow-sm z-10">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <div className="z-10">
                    <h3 className="font-bold text-lg mb-2 text-zinc-900">{facility.name}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{facility.desc}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
