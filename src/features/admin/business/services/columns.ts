import { type Documents } from '@prisma/client';
import { type ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Documents>[] = [
  {
    accessorKey: 'document_id',
    header: 'Document id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'reg_date',
    header: 'Date',
  },
];

export type TableColumnsType = typeof columns;
