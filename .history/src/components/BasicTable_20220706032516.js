import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';

const BasicTable = () => {
  data = useMemo(() => MOCK_DATA, []);
  columns = useMemo(() => COLUMNS, []);
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
