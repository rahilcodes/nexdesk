'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getAssetPath } from '@/lib/utils';

const _links = [
  { name: 'About', href: '/#about' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Workspaces', href: '/#workspaces' },
  { name: 'Facilities', href: '/#facilities' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkText = isScrolled || pathname !== '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkText ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-zinc-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="block">
          <img 
            src={isDarkText ? getAssetPath('/images/logo-black.png') : getAssetPath('/images/logo-white.png')} 
            alt="NEXDESK" 
            className="h-8 md:h-10 w-auto transition-all" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {_links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent-red ${
                isDarkText ? 'text-zinc-600' : 'text-zinc-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            variant={isDarkText ? 'primary' : 'secondary'} 
            size="sm"
            onClick={() => window.location.href = '/#contact'}
          >
            Schedule Visit
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isDarkText ? 'text-black' : 'text-white'} />
          ) : (
            <Menu className={isDarkText ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 mx-6 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {_links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-black text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '/#contact';
                }}
              >
                Schedule Visit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
