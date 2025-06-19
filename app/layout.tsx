import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuroraBackground } from '@/components/ui/aurora-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maximo Solutions - Data Annotation Services',
  description: 'Professional data annotation services for AI and machine learning projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuroraBackground className="min-h-screen">
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
