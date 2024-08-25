'use client'

import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from '@nextui-org/react';
import { fetchData } from '@/services/api';

console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
console.log('API URL:', process.env.NEXT_PUBLIC_API_USERNAME);
console.log('API URL:', process.env.NEXT_PUBLIC_API_PASSWORD);

export default function Home() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const rowsPerPage = 50;

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData();
        console.log('API Response:', data); 
        if (data && data.response && Array.isArray(data.response.data)) {
          setUsers(data.response.data);
        } else {
          console.warn('Unexpected response structure:', data);
          setUsers([]);
        }
      } catch (error) {
        console.error('Error processing data:', error);
        setUsers([]);
      }
    };

    getUsers();
  }, []);

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <div className="dark"> {/* Ensure the dark theme is applied */}
      <Table
        aria-label="Example table with client-side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: 'min-h-[222px] bg-background text-text', // Apply dark theme classes
        }}
      >
        <TableHeader>
          <TableColumn key="version">version</TableColumn>
          <TableColumn key="sku">SKU</TableColumn>
          <TableColumn key="createDate">CreatedDate</TableColumn>
          <TableColumn key="createdBy">CreatedBy</TableColumn>
          <TableColumn key="lastUpdateDate">LastUpdateDate</TableColumn>
          <TableColumn key="lastUpdateBy">LastUpdatedBy</TableColumn>
          <TableColumn key="attribute10">attribute10</TableColumn>
          <TableColumn key="attribute11">attribute11</TableColumn>
          <TableColumn key="attribute12">attribute12</TableColumn>
          <TableColumn key="attribute13">attribute13</TableColumn>
          <TableColumn key="attribute19">attribute19</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.typedId}>
              {(columnKey) => <TableCell className="text-white">{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
