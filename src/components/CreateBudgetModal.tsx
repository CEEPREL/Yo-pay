import React from "react";
import {
  CircularProgress,
  Tabs,
  Text,
  Box,
  CircularProgressLabel,
} from "@chakra-ui/react";

interface Props {
  progressStatus: number;
  progressLabel: string;
  budgetSpent: number;
  mainBudget: number;
}
function CreateBudgetModal({
  progressStatus,
  budgetSpent,
  progressLabel,
  mainBudget,
}: Props) {
  return (
    <div>
      <Tabs
        justifyContent="center"
        alignItems="center"
        display={"flex"}
        variant="unstyled"
        flexDirection={"column"}
      >
        <Box
          width="100%"
          minH="100%"
          justifyContent="center"
          alignItems="center"
          display={"flex"}
          flexDirection={"column"}
        >
          <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
            <CircularProgress
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              pos={"relative"}
              value={200}
              thickness="6px"
              color="blue.100"
              size={250}
            >
              <CircularProgress
                pos={"absolute"}
                size={150}
                value={progressStatus}
                color="#B8CBDF"
                thickness="8px"
                trackColor="white"
                css={{
                  transform: "rotate(90deg)",
                  transformOrigin: "center",
                }}
              ></CircularProgress>
              <CircularProgressLabel
                textColor={"#B8CBDF"}
                fontFamily={"sans-serif"}
                fontWeight={"bold"}
                fontSize={100}
              >
                <Text>?</Text>
              </CircularProgressLabel>
            </CircularProgress>
            <Box
              justifyContent="center"
              alignItems="center"
              display={"flex"}
              gap={"8px"}
              flexDirection={"column"}
            >
              <Text>{progressLabel}</Text>
              <Text
                fontFamily={""}
                color="blue.200"
                fontSize="large"
                fontWeight="bold"
              >
                <span className="text-blue-400 ">₦</span>
                <span className=" text-blue-400">{budgetSpent}</span>/
                <span className="">₦</span>
                {mainBudget}
              </Text>
            </Box>
          </Box>
        </Box>
      </Tabs>
    </div>
  );
}

export default CreateBudgetModal;
