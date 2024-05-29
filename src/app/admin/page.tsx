import React from 'react';

export const dynamic = 'force-dynamic';

const AdminPage = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-main-background">
      <h1 className={'-mt-[83] text-3xl text-white'}>Welcome to admin page!</h1>
      <p className={'mt-3 text-muted'}>
        Right bottom in this screen you can see menu floating button. click it
        and edit!
      </p>
    </main>
  );
};

export default AdminPage;
