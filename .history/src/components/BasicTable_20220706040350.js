import React, { useMemo } from 'react';
import { useRowState } from 'react-table';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';

const BasicTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const instanceOfTable = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, row, prepareRow } =
    instanceOfTable;
  return (
    <div>
      <h1>BasicTable</h1>
      <hr />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => prepareRow(row) return())}
          <tr>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
