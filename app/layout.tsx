import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { profile } from '@/data/cv';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title.en}`,
  description: profile.summary.en,
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
