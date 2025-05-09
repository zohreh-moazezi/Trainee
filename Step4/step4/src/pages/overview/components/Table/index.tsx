import React from 'react';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { BikerData, BikerDataProps } from '@api/table/fetchInformation.types';
import * as Styled from './styled';

const columnHelper = createColumnHelper<BikerData>();
const columns = [
  columnHelper.accessor('name', {
    header: 'Allocations',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('radius', {
    header: 'Radius',
    cell: (info) => info.getValue(),
  }),
];

const BikerTable: React.FC<BikerDataProps> = ({ data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Styled.Container>
      <table>
        
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Styled.TableHeaders key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Styled.TableHeaders>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <Styled.TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Styled.Tablecell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Styled.Tablecell>
              ))}
            </Styled.TableRow>
          ))}
        </tbody>
      </table>
    </Styled.Container>
  );
};

export default BikerTable;
