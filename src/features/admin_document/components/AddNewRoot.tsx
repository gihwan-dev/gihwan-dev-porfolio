import AddNewEditor from './AddNewEditor';
import AddNewTitle from './AddNewTitle';

const AddNewRoot = () => {
  return (
    <main className="flex h-screen min-h-dvh flex-col gap-6 px-6 py-6">
      <AddNewTitle />
      <AddNewEditor />
    </main>
  );
};

export default AddNewRoot;
