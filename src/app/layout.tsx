import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Best Coworking Space in Kondapur | NEXDESK',
  description: 'Premium coworking spaces in Kondapur designed for freelancers, startups, and growing teams. Book your spot today at NEXDESK.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CoworkingSpace",
              "name": "NEXDESK",
              "image": "https://nexdesk.in/nexdesk/images/private-cabin1.png",
              "url": "https://nexdesk.in",
              "telephone": "+919010185859",
              "priceRange": "₹5999 - ₹7999",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-609, B Block, Asian Suncity, Behind AMB Mall",
                "addressLocality": "Kondapur",
                "addressRegion": "Telangana",
                "postalCode": "500084",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4566738,
                "longitude": 78.3582035
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased text-black bg-white`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
