import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { columns } from './columns';
import mock_data from './MOCK_DATA.json';

const BasicTable = () => {
  data = useMemo(() => mock_data, []);
  columns = useMemo(() => columns, []);
  const instanceOfTable = useTable({ columns, data });
  return (
    <div>
      <h1>BasicTable</h1>
      <hr />
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default BasicTable;
