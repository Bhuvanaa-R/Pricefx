//  "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Input,
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Pagination,
//   getKeyValue,
// } from "@nextui-org/react";
// import { fetchDataP } from "@/services/api_product";
// import { fetchDataC } from "@/services/api_customer";

// export default function Home() {
//   const [page, setPage] = useState(1);
//   const [data, setData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const rowsPerPage = 50;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (searchQuery.toLowerCase() === "products") {
//           const response = await fetchDataP();
//           console.log("Products API Response:", response);
//           if (
//             response &&
//             response.response &&
//             Array.isArray(response.response.data)
//           ) {
//             setData(response.response.data);
//           } else {
//             console.warn("Unexpected response structure:", response);
//             setData([]);
//           }
//         } else if (searchQuery.toLowerCase() === "customers") {
//           const response = await fetchDataC();
//           console.log("Customer API Response:", response);
//           if (
//             response &&
//             response.response &&
//             Array.isArray(response.response.data)
//           ) {
//             setData(response.response.data);
//           } else {
//             console.warn("Unexpected response structure:", response);
//             setData([]);
//           }
//         } else {
//           setData([]); // Clear the table when the search query doesn't match
//         }
//       } catch (error) {
//         console.error("Error processing data:", error);
//         setData([]);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   const pages = Math.ceil(data.length / rowsPerPage);

//   const items = React.useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return data.slice(start, end);
//   }, [page, data]);

//   return (
//     <div className="dark bg-page-black min-h-screen flex flex-col items-center">
//       {" "}
//       {/* Entire page background as black */}
//       <Input
//         clearable
//         underlined
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="mb-4 text-white"
//       />
//       {searchQuery.toLowerCase() === "products" && (
//         <Table
//           aria-label="Products table with client-side pagination"
//           bottomContent={
//             <div className="flex w-full justify-center">
//               <Pagination
//                 isCompact
//                 showControls
//                 showShadow
//                 color="secondary"
//                 page={page}
//                 total={pages}
//                 onChange={(page) => setPage(page)}
//               />
//             </div>
//           }
//           classNames={{
//             wrapper: "min-h-[222px] bg-background text-text", // Apply dark theme classes
//           }}
//         >
//           <TableHeader>
//             <TableColumn key="version">Version</TableColumn>
//             <TableColumn key="typedId">Typed ID</TableColumn>
//             <TableColumn key="sku">SKU</TableColumn>
//             <TableColumn key="createDate">Created Date</TableColumn>
//             <TableColumn key="createdBy">Created By</TableColumn>
//             <TableColumn key="lastUpdateDate">Last Update Date</TableColumn>
//             <TableColumn key="lastUpdateBy">Last Updated By</TableColumn>
//             <TableColumn key="attribute10">Attribute 10</TableColumn>
//             <TableColumn key="attribute11">Attribute 11</TableColumn>
//             <TableColumn key="attribute12">Attribute 12</TableColumn>
//             <TableColumn key="attribute13">Attribute 13</TableColumn>
//             <TableColumn key="attribute19">Attribute 19</TableColumn>
//           </TableHeader>
//           <TableBody items={items}>
//             {(item) => (
//               <TableRow key={item.typedId}>
//                 {(columnKey) => (
//                   <TableCell className="text-white">
//                     {getKeyValue(item, columnKey)}
//                   </TableCell>
//                 )}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       )}
//       {searchQuery.toLowerCase() === "customers" && (
//         <Table
//           aria-label="Customer table with client-side pagination"
//           bottomContent={
//             <div className="flex w-full justify-center">
//               <Pagination
//                 isCompact
//                 showControls
//                 showShadow
//                 color="secondary"
//                 page={page}
//                 total={pages}
//                 onChange={(page) => setPage(page)}
//               />
//             </div>
//           }
//           classNames={{
//             wrapper: "min-h-[222px] bg-background text-text", // Apply dark theme classes
//           }}
//         >
//           <TableHeader>
//             <TableColumn key="version">Version</TableColumn>
//             <TableColumn key="typedId">Typed ID</TableColumn>
//             <TableColumn key="customerId">Customer ID</TableColumn>
//             <TableColumn key="name">Name</TableColumn>
//             <TableColumn key="createDate">Created Date</TableColumn>
//             <TableColumn key="createdBy">Created By</TableColumn>
//             <TableColumn key="lastUpdateDate">Last Update Date</TableColumn>
//             <TableColumn key="lastUpdateBy">Last Updated By</TableColumn>
//             <TableColumn key="attribute3">Ship-to</TableColumn>
//             <TableColumn key="attribute4">CP ID</TableColumn>
//             <TableColumn key="attribute5">Company Name</TableColumn>
//             <TableColumn key="attribute8">Region</TableColumn>
//             <TableColumn key="attribute9">Market</TableColumn>
//             <TableColumn key="attribute10">Country</TableColumn>
//             <TableColumn key="attribute11">Address</TableColumn>
//             <TableColumn key="attribute12">Postal Code</TableColumn>
//             <TableColumn key="attribute13">City</TableColumn>
//             <TableColumn key="attribute14">State/Province</TableColumn>
//             <TableColumn key="attribute17">Industry</TableColumn>
//             <TableColumn key="attribute18">Sector</TableColumn>
//             <TableColumn key="attribute19">Currency</TableColumn>
//             <TableColumn key="attribute22">Sales Organization</TableColumn>
//             <TableColumn key="attribute24">Sales Contact</TableColumn>
//             <TableColumn key="attribute27">Category</TableColumn>
//           </TableHeader>
//           <TableBody items={items}>
//             {(item) => (
//               <TableRow key={item.typedId}>
//                 {(columnKey) => (
//                   <TableCell className="text-white">
//                     {getKeyValue(item, columnKey)}
//                   </TableCell>
//                 )}
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// }


// src/app/page.tsx
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirect to the login page
  }, [router]);

  return null; // or a loading spinner
};

export default MainPage;

