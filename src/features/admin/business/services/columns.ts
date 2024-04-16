import { type Documents } from '@prisma/client';
import { type ColumnDef } from '@tanstack/react-table';
import { formattingDate } from '~/utils/date.utils';

export const columns: ColumnDef<Documents>[] = [
  {
    accessorKey: 'document_id',
    header: 'Document Id',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'reg_date',
    header: 'Published At',
    cell: ({ row }) => {
      const regDate = row.getValue('reg_date');

      return formattingDate(regDate as string);
    },
  },
];

export type TableColumnsType = typeof columns;
