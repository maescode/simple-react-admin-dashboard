import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';

const BasicTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const instanceOfTable = useTable({ columns, data });

  const { getTableProps, getTableBOdyProps, headerGroups, row, prepareRow } =
    instanceOfTable;
  return (
    <div>
      <h1>BasicTable</h1>
      <hr />
      <table {...getTableProps()}>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
