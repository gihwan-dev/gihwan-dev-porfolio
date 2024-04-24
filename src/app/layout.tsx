import '~/styles/globals.css';

import { Black_Han_Sans, Noto_Sans_KR } from 'next/font/google';

import { TRPCReactProvider } from '~/trpc/react';
import { Toaster } from '~/components/ui/toaster';
import MainNav from '~/components/MainNav';
import MainFooter from '~/components/MainFooter';

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
  description: '프론트엔드 개발자 최기환의 포트폴리오 사이트 입니다.',
  keywords: [
    '프론트엔드',
    '개발자',
    '포트폴리오',
    '개발자 포트폴리오',
    '프론트엔드 개발자 포트폴리오',
  ],
  openGraph: {
    title: '프론트엔드 개발자 최기환의 포트폴리오',
    description: '프론트엔드 개발자 최기환의 포트폴리오 사이트 입니다.',
  },
  twitter: {
    title: '프론트엔드 개발자 최기환의 포트폴리오',
    description: '프론트엔드 개발자 최기환의 포트폴리오 사이트 입니다.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${blackHans.variable} bg-main-background`}
    >
      <body>
        <TRPCReactProvider>
          <MainNav />
          <div className="h-full min-h-dvh w-full overflow-x-hidden bg-main-background pt-[82px]">
            {children}
            <MainFooter />
          </div>
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
