import { Box, Heading } from "@chakra-ui/react";
import DataTable from "../components/DataTable";

const headers = ["Timestamp", "purchaseId", "mail", "name", "source", "status", "select"];

const rows = [
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "example@mail.com", name: "John Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1234", mail: "cxample@mail.com", name: "Cohn Doe", source: "Online", status: "Completed", select: "Yes" },
  {  Timestamp: "2023-07-14", purchaseId: "1236", mail: "dxample@mail.com", name: "dohn Doe", source: "Online", status: "Completed", select: "Yes" },

  // Add more rows as needed
];

const Home: React.FC = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Bookings</Heading>
      <DataTable sortable caption="Bookings" headers={headers} rows={rows} />
    </Box>
  );
};

export default Home;
