import { createStore } from 'zustand';

export interface EditorState {
  model: string;
}

export interface EditorActions {
  change: (model: string) => void;
  initializeState: () => void;
}

export type EditorStore = EditorState & EditorActions;

const defaultInitState: EditorState = {
  model: '',
};

export const createEditorStore = (initialState = defaultInitState) =>
  createStore<EditorStore>()(set => ({
    ...initialState,
    change: (value: string) => set(_ => ({ model: value })),
    initializeState: () => set(_ => ({ model: '' })),
  }));
