import { Box, Table, Thead, Tbody, Tr, Th, Td, Icon, Flex, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { ArrowUpIcon, ArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface DataTableProps {
  sortable?: boolean;
  caption?: string;
  headers: string[];
  rows: Record<string, any>[];
}

const DataTable: React.FC<DataTableProps> = ({ sortable, caption, headers, rows }) => {
  const [sortedColumn, setSortedColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState<Record<string, any>[]>([]);
  const itemsPerPage = 10;

  const handleSort = (column: string) => {
    if (sortable) {
      if (sortedColumn === column) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      } else {
        setSortedColumn(column);
        setSortOrder("asc");
      }
    }
  };

  const paginateRows = () => {
    const data = searchQuery ? filteredRows : rows;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = rows.filter((row) => {
      const rowValues = Object.values(row).map((value) =>
        String(value).toLowerCase()
      );
      return rowValues.some((value) => value.includes(query.toLowerCase()));
    });

    setFilteredRows(filtered);
    setCurrentPage(1);
  };

  const renderHeaders = () => {
    return headers.map((header, index) => (
      <Th key={index} onClick={() => handleSort(header)}>
        {header}
        {sortable && sortedColumn === header && (
          <Icon as={sortOrder === "asc" ? ArrowUpIcon : ArrowDownIcon} boxSize={4} ml={1} />
        )}
        {sortable && sortedColumn !== header && (
          <Icon as={ArrowUpIcon} boxSize={4} opacity={0.4} ml={1} />
        )}
      </Th>
    ));
  };

  const renderRows = () => {
    let sortedRows = [...rows];
    if (sortable && sortedColumn) {
      rows.sort((a, b) => {
        const aValue = String(a[sortedColumn])?.toLowerCase() || "";
        const bValue = String(b[sortedColumn])?.toLowerCase() || "";
        if (aValue < bValue) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    return paginateRows().map((row, index) => (
      <Tr key={index}>
        {headers.map((header, cellIndex) => (
          <Td key={cellIndex}>{row[header]}</Td>
        ))}
      </Tr>
    ));
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(
      (searchQuery ? filteredRows.length : rows.length) / itemsPerPage
    );

    const handlePreviousPage = () => {
      setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    return (
      <Box>
        {sortable && (
          <Flex justify="flex-end" mb={4}>
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </Flex>
        )}
        <Table variant="striped" colorScheme="gray">
          {caption && <caption>{caption}</caption>}
          <Thead>
            <Tr>{renderHeaders()}</Tr>
          </Thead>
          <Tbody>{sortOrder && renderRows()}</Tbody>
        </Table>
        <Flex justify="flex-end" mt={4}>
          <Button
            variant="outline"
            leftIcon={<ChevronLeftIcon />}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            size="sm"
            paddingLeft={2}
            paddingRight={1}
          />
          <Button size="sm" colorScheme="blue">
            {currentPage}
          </Button>
          <Button
            variant="outline"
            rightIcon={<ChevronRightIcon />}
            onClick={handleNextPage}
            disabled={currentPage === totalPages || rows.length <= itemsPerPage}
            size="sm"
            paddingLeft={1}
            paddingRight={2}
          />
        </Flex>
      </Box>
    );
  };

  return <>{renderPagination()}</>;
};

export default DataTable;
