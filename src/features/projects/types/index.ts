import type { Document_Tags, Documents } from '@prisma/client';
import type React from 'react';

export interface ContextState {
  document: DocumentWithTag;
  openTechList: boolean;
  toggleTechList: () => void;
}

export type DocumentWithTag = Documents & { project_tags: Document_Tags[] };

export interface ProjectRootProps {
  documents: DocumentWithTag[];
}

export interface ProviderProps {
  children: React.ReactNode;
  document: DocumentWithTag;
}

export interface ChildrenProps {
  children: React.ReactNode;
}
