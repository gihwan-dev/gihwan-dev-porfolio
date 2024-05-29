import { LoginForm } from '~/features/admin';

export const dynamic = 'force-dynamic';

const AdminLoginPage = () => {
  return (
    <main className="flex h-full w-screen flex-col justify-center">
      <section className="m-auto flex w-full max-w-sm flex-col gap-8 rounded-sm border border-gray-400 px-6 py-8">
        <h2 className="text-xl font-bold text-white">Login</h2>
        <LoginForm />
      </section>
    </main>
  );
};

export default AdminLoginPage;
