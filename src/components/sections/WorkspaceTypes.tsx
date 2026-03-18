'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { User, Users, Briefcase, MonitorPlay } from 'lucide-react';

const workspaces = [
  {
    title: 'Hot Desk',
    capacity: '1 person',
    desc: 'Flexible seating in our open, dynamic workspace area.',
    icon: User,
  },
  {
    title: 'Dedicated Desk',
    capacity: '1 fixed desk',
    desc: 'Your own personal desk in a shared professional space.',
    icon: MonitorPlay,
  },
  {
    title: 'Private Cabin',
    capacity: 'Up to 4 people',
    desc: 'Enclosed secure spaces perfect for focused small teams.',
    icon: Briefcase,
  },
  {
    title: 'Team Office',
    capacity: 'Up to 10 people',
    desc: 'Customizable private suites for larger growing teams.',
    icon: Users,
  },
];

export default function WorkspaceTypes() {
  return (
    <section id="workspaces" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Spaces for Every Need.</h2>
          <p className="text-lg text-zinc-600">From solo freelancers to growing teams of 10.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workspaces.map((space, i) => {
            const Icon = space.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full p-6 hover:border-black transition-colors group">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-black group-hover:bg-accent-red group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{space.title}</h3>
                  <div className="text-accent-red text-sm font-semibold mb-3">{space.capacity}</div>
                  <p className="text-zinc-600 text-sm leading-relaxed">{space.desc}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-black text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6"
        >
          <div>
            <h4 className="text-2xl font-bold mb-1 tracking-tight">Need a Meeting Room?</h4>
            <p className="text-zinc-400">Our conference rooms are available with <strong className="text-white">free access</strong> (no hourly charge) for members.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
