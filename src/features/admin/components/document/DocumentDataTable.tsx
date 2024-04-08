'use client';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { api } from '~/trpc/react';

import { columns } from '../../services/columns';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';
import { Skeleton } from '~/components/ui/skeleton';
import { useRouter, useSearchParams } from 'next/navigation';

const DocumentDataTable = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get('page') ?? 1;
  const type = searchParams.get('type') ?? 'Project';

  const { data, isLoading } = api.document.getTypedDocument.useQuery({
    page: Number(page),
    type: type,
  });

  const table = useReactTable({
    data: data ?? [],
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onRowClick = (documentId: unknown) => {
    if (typeof documentId === 'number') {
      router.push(`/admin/documents/preview/${documentId}`);
    }
  };

  if (isLoading) {
    return <Skeleton className="h-[145px] w-full" />;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                className="cursor-pointer"
                onClick={() => {
                  const documentId = row.getValue('document_id');
                  onRowClick(documentId);
                }}
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map(cell => {
                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DocumentDataTable;
