'use client';

import { createContext, useContext, useRef } from 'react';

import { type StoreApi, useStore } from 'zustand';
import { createEditorStore, type EditorStore } from '../stores/useEditorStore';
import { type ChildrenProps } from '~/types/props-types';

export const CounterStoreContext = createContext<StoreApi<EditorStore> | null>(
  null,
);

export function EditorStoreProvider({ children }: ChildrenProps) {
  const storeRef = useRef<StoreApi<EditorStore>>();

  if (!storeRef.current) {
    storeRef.current = createEditorStore();
  }
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
}

export const useEditorStore = <T,>(selector: (state: EditorStore) => T): T => {
  const editorStoreContext = useContext(CounterStoreContext);

  if (!editorStoreContext) {
    throw Error('useEditorStore must be used within a EditorStoreProvider');
  }

  return useStore(editorStoreContext, selector);
};
