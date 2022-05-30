import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy, Column, HeaderGroup } from 'react-table';

// export type UnitConversion = {
//     fromUnit: string;
//     toUnit: string;
//     factor: number;
// };

export type UnitConversion = {
    username: string,
    activites: number;
    connectios: number;
    contributions: number;
};

const SocialDataTable = () => {
    const data: UnitConversion[] = React.useMemo(
        () => [
          {
            username: 'user1.eth',
            activites: 5,
            connectios: 2,
            contributions: 3,
          },
          {
            username: 'user2.eth',
            activites: 1,
            connectios: 2,
            contributions: 1,
          },
          {
            username: 'user3.eth',
            activites: 0,
            connectios: 3,
            contributions: 6,
          },
          {
            username: 'user4.eth',
            activites: 2,
            connectios: 9,
            contributions: 1,
          },
          {
            username: 'user5.eth',
            activites: 15,
            connectios: 2,
            contributions: 3,
          },
          {
            username: 'user6.eth',
            activites: 23,
            connectios: 2,
            contributions: 2,
          },
        ],
        [],
    );
    
    const columns: Column<UnitConversion>[] = React.useMemo(
        () => [
          {
            Header: 'Username',
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

export default SocialDataTable;