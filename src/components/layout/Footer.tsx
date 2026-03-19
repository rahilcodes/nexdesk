import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 block">
              <img src="/nexdesk/images/logo-white.png" alt="NEXDESK" className="h-10 w-auto" />
            </Link>
            <p className="text-zinc-400 max-w-sm">
              Build. Connect. Grow. Premium coworking spaces designed for freelancers, startups, and growing teams across Kondapur, Gachibowli, and Hi-Tech City, Hyderabad.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/#gallery" className="text-zinc-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-zinc-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} NEXDESK. All rights reserved. Designed and developed by <a href="https://creativals.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-red transition-colors text-zinc-400">Creativals.com</a></p>
          <p className="mt-4 md:mt-0">Located in Kondapur, Hyderabad.</p>
        </div>
      </div>
    </footer>
  );
}
