import './globals.css';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Signature Generator',
  description: 'Craft personalized, professional email signatures effortlessly',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={clsx(inter.className, 'h-screen bg-stone-900 p-4')}
      >
        {children}
      </body>
    </html>
  );
}
