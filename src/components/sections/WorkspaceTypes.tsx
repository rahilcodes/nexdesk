'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { User, Users, Briefcase, MonitorPlay } from 'lucide-react';
import { getAssetPath } from '@/lib/utils';

const workspaces = [
  {
    title: 'Hot Desk',
    capacity: '1 person',
    desc: 'Flexible seating in our open, dynamic workspace area.',
    icon: User,
    image: getAssetPath('/images/open-desks.png'),
  },
  {
    title: 'Dedicated Desk',
    capacity: '1 fixed desk',
    desc: 'Your own personal desk in a shared professional space.',
    icon: MonitorPlay,
    image: getAssetPath('/images/open-desks1.png'),
  },
  {
    title: 'Private Cabin',
    capacity: 'Up to 4 people',
    desc: 'Enclosed secure spaces perfect for focused small teams.',
    icon: Briefcase,
    image: getAssetPath('/images/private-cabin1.png'),
  },
  {
    title: 'Team Office Space',
    capacity: 'Up to 10 people',
    desc: 'Customizable private suites for larger growing teams.',
    icon: Users,
    image: getAssetPath('/images/team-officee.png'),
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
                <Card className="h-full flex flex-col hover:border-black transition-colors group overflow-hidden shadow-lg border-zinc-200">
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <img 
                      src={space.image} 
                      alt={space.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-black group-hover:bg-accent-red group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{space.title}</h3>
                    <div className="text-accent-red text-sm font-semibold mb-3">{space.capacity}</div>
                    <p className="text-zinc-600 text-sm leading-relaxed">{space.desc}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-black text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 overflow-hidden relative"
        >
          <div className="md:w-1/2 relative z-10">
            <h4 className="text-3xl font-bold mb-3 tracking-tight">Need a Meeting Room?</h4>
            <p className="text-zinc-400 text-lg">Our conference rooms are available with <strong className="text-white">free access</strong> (no hourly charge) for members. Fully equipped with modern conferencing tools.</p>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0 rounded-2xl md:rounded-none overflow-hidden">
            <img 
              src={getAssetPath("/images/meeting-room1.png")} 
              alt="Conference Room" 
              className="w-full h-full object-cover opacity-80" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
