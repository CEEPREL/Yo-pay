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
function ProgressBar({
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
          // position="relative"
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
              thickness="10px"
              color="blue.100"
              size={250}
            >
              <CircularProgress
                pos={"absolute"}
                size={230}
                value={progressStatus}
                color="blue.500"
                thickness="6px"
                trackColor="white"
              >
                <CircularProgressLabel
                  textColor={"#0466C8"}
                  fontFamily={"sans-serif"}
                  fontWeight={"bold"}
                >
                  {progressStatus}%
                </CircularProgressLabel>
              </CircularProgress>
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
                <span className="text-blue-400 bblueline-through">N</span>
                <span className=" text-blue-400">{budgetSpent}</span>/
                <span className="line-through">N</span>
                {mainBudget}
              </Text>
            </Box>
          </Box>
        </Box>
      </Tabs>
    </div>
  );
}

export default ProgressBar;
