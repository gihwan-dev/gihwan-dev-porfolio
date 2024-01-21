import '~/styles/globals.css';

import { Inter } from 'next/font/google';

import { TRPCReactProvider } from '~/trpc/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: '프론트엔드 개발자 최기환의 포트폴리오',
  description:
    '프론트엔드 개발자 최기환의 포트폴리오 사이트 입니다. T3 스택으로 개발 되었습니다.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
