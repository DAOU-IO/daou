import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, Column, HeaderGroup } from 'react-table';

export type UnitConversion = {
    username: string,
    activites: number;
    connectios: number;
    contributions: number;
};

const SocialDataTable2 = () => {
    const data: UnitConversion[] = React.useMemo(
        () => [
          {
            username: 'Discord',
            activites: 15,
            connectios: 14,
            contributions: 3,
          },
          {
            username: 'Forum',
            activites: 11,
            connectios: 6,
            contributions: 1,
          },
          {
            username: 'Github',
            activites: 8,
            connectios: 3,
            contributions: 26,
          },
          {
            username: 'Twitter',
            activites: 5,
            connectios: 9,
            contributions: 1,
          },
        ],
        [],
    );
    
    const columns: Column<UnitConversion>[] = React.useMemo(
        () => [
          {
            Header: 'Data Source',
            accessor: 'username',
          },
          {
            Header: 'Activities',
            accessor: 'activites',
            isNumeric: true,
          },
          {
            Header: 'Connectios',
            accessor: 'connectios',
            isNumeric: true,
          },
          {
            Header: 'Contributions',
            accessor: 'contributions',
            isNumeric: true,
          },
        ],
        [],
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

    return(
        <Table 
            {...getTableProps()}
            color="whiteAlpha.900"
            borderColor="whiteAlpha.600"
        >
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  color="whiteAlpha.900"
                >
                  {column.render('Header')}
                  <chakra.span >
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label='sorted descending' />
                      ) : (
                        <TriangleUpIcon aria-label='sorted ascending' />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    );

};

export default SocialDataTable2;