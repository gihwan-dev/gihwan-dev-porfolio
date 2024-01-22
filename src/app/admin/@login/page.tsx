import { LoginForm } from '~/features/admin';
import { initUser } from '~/server/utils/bio.utils';

const AdminLoginPage = () => {
  // TODO: 로그인 페이지 로직 구현

  const onSubmitAction = async () => {
    'use server';
    const result = await initUser();
    console.log(result);
  };

  return (
    <main className="w-screen h-full flex flex-col justify-center">
      <section className="max-w-sm w-full m-auto flex flex-col gap-8 border px-6 py-8 rounded-sm border-gray-400">
        <h2 className="text-xl font-bold">Login</h2>
        <LoginForm />
        <form action={onSubmitAction}>
          <button type="submit">init</button>
        </form>
      </section>
    </main>
  );
};

export default AdminLoginPage;
