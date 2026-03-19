'use client';

import { motion } from 'framer-motion';
import { Monitor, Wifi, Users, Zap, UserCheck, Coffee, Video, CarFront, Wind, Clock, FileWarning } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const facilities = [
  { name: 'Fully Furnished Workstations', icon: Monitor },
  { name: 'High-Speed WiFi', icon: Wifi },
  { name: 'Meeting Rooms', icon: Users },
  { name: 'Power Backup', icon: Zap },
  { name: 'Reception', icon: UserCheck },
  { name: 'Pantry', icon: Coffee },
  { name: 'CCTV Security', icon: Video },
  { name: 'Parking', icon: CarFront },
  { name: 'Air Conditioning', icon: Wind },
  { name: '24/7 Access', icon: Clock },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-zinc-50 text-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">World-Class Facilities.</h2>
          <p className="text-lg text-zinc-600">Everything you need to do your best work.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="p-6 h-full flex flex-col items-center justify-center text-center gap-4 hover:border-black transition-colors group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-black group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="font-semibold text-sm">{facility.name}</span>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
