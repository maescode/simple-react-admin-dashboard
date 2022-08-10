import React from 'react';
import { useTable } from 'react-table';
import { columns } from './columns';
import data from './MOCK_DATA.json';

const BasicTable = () => {
  const instanceOfTable = useTable({ columns, data });
  return <div>BasicTable</div>;
};

export default BasicTable;
