import { LoginForm } from '~/features/admin';

const AdminLoginPage = () => {
  // TODO: 로그인 페이지 로직 구현
  return (
    <main className="max-w-7xl w-full h-full flex flex-col justify-center">
      <section className="max-w-sm w-full m-auto flex flex-col gap-8 border px-6 py-8 rounded-sm border-gray-400">
        <h2 className="text-xl font-bold">Login</h2>
        <LoginForm />
      </section>
    </main>
  );
};

export default AdminLoginPage;
