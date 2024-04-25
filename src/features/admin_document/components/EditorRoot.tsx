import Editor from './Editor';
import EditorTitle from './EditorTitle';

const EditorRoot = () => {
  return (
    <main className="flex h-screen min-h-dvh flex-col gap-6 px-6 py-6">
      <EditorTitle />
      <Editor />
    </main>
  );
};

export default EditorRoot;
