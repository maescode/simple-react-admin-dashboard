import React from 'react';
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../../datatablesource';

const Datatable = () => {
  const actionColumn = [{ field: 'action', headerName: 'Action', width: 200 }];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
