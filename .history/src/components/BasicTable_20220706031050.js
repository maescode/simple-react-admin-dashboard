import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { columns } from './columns';
import data from './MOCK_DATA.json';

const BasicTable = () => {
  data = useMemo(() => data, []);
  columns = useTable(() => columns, []);
  const instanceOfTable = useTable({ columns: columns, data: data });
  return <div>BasicTable</div>;
};

export default BasicTable;
