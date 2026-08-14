import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getAssetPath } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Premium Coworking Space in Kondapur, Gachibowli & Hi-Tech City | NEXDESK Hyderabad',
  description: 'Located at the prime intersection of Kondapur, Gachibowli, and Hi-Tech City, NEXDESK offers premium coworking spaces in Hyderabad for startups, teams, and freelancers.',
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
              "image": `https://nexdesk.in${getAssetPath('/images/private-cabin1.png')}`,
              "url": "https://nexdesk.in",
              "telephone": "+919010185859",
              "priceRange": "₹7499 - ₹7999",
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
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2401243337708838');
fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2401243337708838&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
