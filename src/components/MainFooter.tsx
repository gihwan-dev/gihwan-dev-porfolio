'use client';

import { usePathname } from 'next/navigation';

export default function MainFooter() {
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="w-full bg-main-foreground py-12 text-center text-xs text-gray-400 md:text-sm">
      Copyright 2024. gihwan-dev all rights reserved
    </footer>
  );
}
