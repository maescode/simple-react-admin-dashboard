import React from 'react';
import './table.scss';

const Table = () => {
  const data = [
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: '',
      customer: 'Jane Smith',
      date: '1 March',
      amount: 920,
      method: 'Online',
    },
  ];
  return <div className="table">Table</div>;
};

export default Table;
