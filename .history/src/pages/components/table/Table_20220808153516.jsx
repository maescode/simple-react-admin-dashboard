import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss';

const rows = [
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