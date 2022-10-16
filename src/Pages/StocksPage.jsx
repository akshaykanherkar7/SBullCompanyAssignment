import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./StockPage.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStocksAPI } from "../Redux/Stocks/stocks.action";
import { Link } from "react-router-dom";

const StocksPage = () => {
  const dispatch = useDispatch();
  const { Stocks } = useSelector((state) => state.stocks);
  const [Data, setData] = useState(Stocks);
  const [Search, setSearch] = useState([]);
  const [value, setValue] = useState("");
  console.log("Data:", Data);

  useEffect(() => {
    if (Stocks) {
      setData([...Stocks]);
    } else if (value === "") {
      setData([...Stocks]);
    }
  }, [Stocks, value]);

  const handleSearch = () => {
    let newData = Data.filter((el) => {
      if (el.Symbol === value) {
        return el;
      } else if (el.Name.toLowerCase() === value) {
        return el;
      }
    });
    if (newData) {
      setSearch([...newData]);
    }
  };

  useEffect(() => {
    if (Search) {
      setData([...Search]);
    } else {
      setData([...Stocks]);
    }
  }, [Search]);

  useEffect(() => {
    dispatch(getStocksAPI());
  }, []);

  return (
    <div>
      <Heading textAlign={"center"} color="brown">
        Stocks Page
      </Heading>
      <Box w="50%" m="auto" mt="10px">
        <Flex gap="5px">
          <Input
            placeholder="Search by Symbol or Name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={handleSearch} colorScheme={"teal"}>
            Search
          </Button>
        </Flex>
      </Box>
      <TableContainer mt="10px" width={"80%"} m="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"white"}>Symbol</Th>
              <Th color={"white"}>Name</Th>
              <Th color={"white"}>Sector</Th>
              <Th color={"white"}>Validtill</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {Data.length &&
              Data.map((item, ind) => (
                <Tr key={ind}>
                  <Td>
                    {" "}
                    <Link to={`/${item.Symbol}`}>{item.Symbol}</Link>
                  </Td>
                  <Td>{item.Name}</Td>
                  <Td>{item.Sector}</Td>
                  <Td>{item.Validtill}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StocksPage;
