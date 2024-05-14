import React from "react";
import {
  Box,
  Flex,
  CircularProgressLabel,
  Text,
  Link,
  CircularProgress,
  Stack,
} from "@chakra-ui/react";
import { useGlobalContext } from "@/Contex/GlobalContext";

function BudgetBreakdown() {
  const { showRenderedBudget, setShowRenderedBudget } = useGlobalContext();

  return (
    <Box w={"100%"}>
      <Text fontSize="x-large" fontWeight="bold">
        Category Breakdown
      </Text>
      <Stack marginTop="40px" pb={"5"} spacing={"30px"}>
        {showRenderedBudget ? (
          showRenderedBudget.map((categoryItem) => (
            <Flex gap={"70px"}>
              <Box>
                <Box className="absolute">
                  <CircularProgress
                    value={categoryItem.remPercent}
                    color={categoryItem.progressColor}
                    thickness="8px"
                    trackColor="white"
                    size={"60px"}
                  >
                    <CircularProgressLabel
                      width="50px"
                      height="50px"
                      rounded={100}
                      backgroundColor={categoryItem.innerColor}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <categoryItem.Icon size={25} />
                    </CircularProgressLabel>
                  </CircularProgress>
                </Box>
              </Box>
              <Stack>
                <Text> {categoryItem.label}</Text>
                <Text> {categoryItem.remPercent}%</Text>
              </Stack>
              <Text color="gray.400" fontSize="small" fontWeight="bold">
                <span className="text-black bblueline-through">N</span>
                <span className=" text-black">
                  {categoryItem.amount - categoryItem.amountRemaining}
                </span>
                /<span className="line-through ">N</span>
                {categoryItem.amount}
              </Text>
            </Flex>
          ))
        ) : (
          <div className="flex text-7xl font-extrabold text-gray-500">
            Create a Budget
          </div>
        )}
      </Stack>
    </Box>
  );
}

export default BudgetBreakdown;
