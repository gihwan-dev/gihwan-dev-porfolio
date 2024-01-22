import '~/styles/globals.css';

import { Black_Han_Sans, Noto_Sans_KR } from 'next/font/google';

import { TRPCReactProvider } from '~/trpc/react';

const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const blackHans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-black-hans',
  display: 'swap',
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
    <html lang="en" className={`${notoSans.variable} ${blackHans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
