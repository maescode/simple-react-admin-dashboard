import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { columns } from './columns';
import data from './MOCK_DATA.json';

const BasicTable = () => {
  data = useMemo(() => data, []);
  columns = useTable(() => columns, []);
  const instanceOfTable = useTable({ columns, data });
  return (
    <div>
      <h1>BasicTable</h1>
    </div>
  );
};

export default BasicTable;
