import CompleteEditForm from './CompleteEditForm';
import CompleteEditTitle from './CompleteEditTitle';

const CompleteEditRoot = () => {
  return (
    <main className="flex w-full flex-col items-center gap-6 overflow-y-auto px-12 py-12">
      <CompleteEditTitle />
      <CompleteEditForm />
    </main>
  );
};

export default CompleteEditRoot;
