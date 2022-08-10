import React from 'react';
import './table.scss';

const Table = () => {
  const data = [
    {
      id: 2357741,
      product: 'Razer Blade 15',
      img: 'https://picsum.photos/id/237/200/300',
      customer: 'Jane Smith',
      date: '1 March',
      amount: 920,
      method: 'Online',
      status: 'Approved',
    },
    {
      id: 2357742,
      product: 'Blade 15',
      img: 'https://picsum.photos/id/237/200/300',
      customer: 'Abel Olayinka',
      date: '1 March',
      amount: 920,
      method: 'Online',
      status: 'Pending',
    },
  ];
  return <div className="table">Table</div>;
};

export default Table;
