import type { Document_Tags } from '@prisma/client';

export interface TagWithCount extends Document_Tags {
  _count: {
    Documents: number;
  };
}

export interface SkillsContentProps {
  tags: TagWithCount[];
}
