import React, { useMemo } from 'react';
import { usePagination, useRowState } from 'react-table';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';
import './table.css';

const PaginationTable = () => {
  const data = useMemo(() => MOCK_DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  const instanceOfTable = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
  } = instanceOfTable;

  const { pageIndex } = state;
  return (
    <div>
      <h1>BasicTable</h1>
      <hr />
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div className="pagination">
        <div>
          page {''}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </div>

        <div>
          Go to Page{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) : 0;
            }}
          />{' '}
        </div>

        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}>
          {'<<'}
        </button>

        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}>
          Prev
        </button>
        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}>
          Next
        </button>

        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}>
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
