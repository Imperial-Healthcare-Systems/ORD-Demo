import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import './globals.css';
import Chrome from '@/components/Chrome';
import ToastProvider from '@/components/ToastProvider';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
});
const serif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'ODR Platform — Demo',
  description:
    'Online Dispute Resolution platform — interactive demo by Imperial Tech Innovations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <ToastProvider>
          <div className="app">
            <Chrome />
            <div className="stage">{children}</div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
