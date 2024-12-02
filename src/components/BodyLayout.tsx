'use client';

import UserSidebar from '@/components/UserSidebar';
import { useState } from 'react';
import UserHeader from './Header';

export default function BodyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSide, setShowSide] = useState<boolean>(false);

  return (
    <div className="flex h-full relative">
      {/* Sidebar */}
      <UserSidebar setShowSide={setShowSide} showSide={showSide} />

      {/* Main Content */}
      <div className="w-full lg:w-[75%] ml-auto lg:h-screen">
        <UserHeader setShowSide={setShowSide} showSide={showSide} />
        <div className="h-[90svh] lg:h-[100vh] overflow-scroll">{children}</div>
      </div>
    </div>
  );
}
