import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import "../css/style1.css";
import "../css/style2.css";

const aeonik = localFont({
  src: [
    { path: '../../public/media/Aeonik_Regular-s.p.e5e15da1.otf', weight: '400', style: 'normal' },
    { path: '../../public/media/Aeonik_RegularItalic-s.p.2b6460ae.otf', weight: '400', style: 'italic' },
    { path: '../../public/media/Aeonik_Light-s.p.f4cd450b.otf', weight: '300', style: 'normal' },
    { path: '../../public/media/Aeonik_LightItalic-s.p.3a994f5b.otf', weight: '300', style: 'italic' },
    { path: '../../public/media/Aeonik_Medium-s.p.e78b5ad7.otf', weight: '500', style: 'normal' },
    { path: '../../public/media/Aeonik_Bold-s.p.d334bfca.otf', weight: '700', style: 'normal' },
    { path: '../../public/media/Aeonik_BoldItalic-s.p.434b839a.otf', weight: '700', style: 'italic' },
  ],
  variable: '--font-aeonik',
})

const aeonikMono = localFont({
  src: '../../public/media/AeonikMono_Regular-s.p.a0d063bf.otf',
  variable: '--font-aeonik-mono',
})

export const metadata: Metadata = {
  title: "Health report - Ahead Health",
  description: "Your Ahead Health health report",
  openGraph: {
    title: "Health report - Ahead Health",
    description: "Your Ahead Health health report",
    images: [{ url: "/images/social-preview.avif" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health report - Ahead Health",
    description: "Your Ahead Health health report",
    images: ["/images/social-preview.avif"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico?favicon.45069da7.ico", sizes: "192x192", type: "image/x-icon" },
    { rel: "icon", url: "/images/logo-small.png" },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${aeonik.variable} ${aeonikMono.variable} notranslate antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
