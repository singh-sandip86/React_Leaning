import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/font';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className}`}>{children}</body>
    </html>
  );
}
