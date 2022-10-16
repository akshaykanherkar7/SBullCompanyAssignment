import { Box, FormLabel, Grid, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuotesAPI } from "../Redux/Quotes/quotes.action";

const QuotesPage = () => {
  const { Symbol } = useParams();

  const dispatch = useDispatch();
  const { Quotes } = useSelector((state) => state.quotes);
  const [Data, setData] = useState([...Quotes]);
  console.log("Data:", Data);
  // console.log("Quotes:", Quotes);

  useEffect(() => {
    setData([...Quotes]);
  }, [Quotes]);

  useEffect(() => {
    dispatch(getQuotesAPI(Symbol));
  }, []);

  const handleSOrtByTime = (e) => {
    if (e.target.value === "asc") {
      Data.sort((a, b) => {
        return a.time - b.time;
      });
      setData([...Data]);
    } else if (e.target.value === "desc") {
      Data.sort((a, b) => {
        return b.time - a.time;
      });
      setData([...Data]);
    }
  };

  return (
    <div>
      <Heading textAlign="center" mb={"9px"} color="brown">
        Quotes
      </Heading>
      <Box
        // border="1px solid red"
        mt="18px"
        padding={"12px"}
        backgroundColor="teal"
        borderRadius={"8px"}
        w="98%"
        m="auto"
      >
        <Box>
          <Select
            placeholder="Sort By TimeStamp"
            color={"pink"}
            textAlign="center"
            onChange={handleSOrtByTime}
          >
            <option value="asc">Low to High(Ascending)</option>
            <option value="desc">High to Low(Descending)</option>
          </Select>
        </Box>
      </Box>
      <Box
        border="box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset"
        width={"85%"}
        m="auto"
        mt="40px"
        h={"600px"}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {Data.length > 0 &&
            Data.map((el, ind) => (
              <Box
                border={"2px solid gray"}
                w="fit-content"
                p="10px"
                key={ind}
                borderRadius="5px"
              >
                <Text>
                  <label style={{ color: "orange" }}>Price:</label> {el.price}{" "}
                  Rs
                </Text>
                <Text>
                  <label style={{ color: "green" }}>Time: </label> {el.time}
                </Text>
                <Text>
                  <label style={{ color: "red" }}>Valid_Till:</label>{" "}
                  {el.valid_till}
                </Text>
              </Box>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default QuotesPage;
