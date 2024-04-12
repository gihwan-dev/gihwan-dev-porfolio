import { create } from 'zustand';

interface EditorState {
  model: string;
  change: (model: string) => void;
}

export const useEditorStore = create<EditorState>()(set => ({
  model: '',
  change: (value: string) => set(_ => ({ model: value })),
}));
