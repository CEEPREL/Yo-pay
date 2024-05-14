"use client";
import React from "react";
import { useGlobalContext } from "@/Contex/GlobalContext";
import BudgetBreakdown from "@/components/BudgetBreakdown";
import ProgressBar from "./ProgressBar";
import MultipleProgressBar from "./MultipleProgressBar";
import {
  Tabs,
  TabList,
  Box,
  TabPanels,
  TabIndicator,
  Tab,
  Text,
  TabPanel,
} from "@chakra-ui/react";
import CategoryModal from "./CategoryModal";
import CreateBudgetModal from "./CreateBudgetModal";

interface Props {
  progressStatus: number;
  tab1: string;
  tab2: string;
  progressLabel: string;
  budgetSpent: number;
  mainBudget: number;
  onClose?: () => void;
  isOpen: boolean;

  // handleClick: void;
}

function MonthlyTab({
  tab1,
  tab2,
  progressStatus,
  progressLabel,
  budgetSpent,
  mainBudget,
  onClose,
  isOpen,
}: Props) {
  const handleClose = () => {
    setModalOpen(false);
    const percentages = [20, 30, 15, 10, 5, 20];
    const colors = [
      "#ff5733",
      "#f5d300",
      "#19d419",
      "#007bff",
      "#9d00f2",
      "#ff5733",
    ];
  };

  const {
    modalOpen,
    setModalOpen,
    showExpenseOverview,
    setShowExpenseOverview,
    showCategoryOverview,
    setShowCategoryOverview,
    setShowCreateBudget,
    showCreateBudget,
  } = useGlobalContext();

  return (
    <Tabs pos={"relative"} variant="unstyled">
      <TabList
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Tab>{tab1}</Tab>
          <Tab>{tab2}</Tab>
        </Box>

        <Box
          cursor={"pointer"}
          fontWeight={"bold"}
          fontSize={"20px"}
          marginLeft={"50px"}
          marginRight={"10px"}
          onClick={() => setModalOpen(!modalOpen)}
        >
          ...
        </Box>
      </TabList>

      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel minH={"100%"}>
          <Box overflow={"hidden"} h={"100%"} pos="absolute">
            <CategoryModal isOpen={isOpen} onClose={handleClose}>
              <Box />
            </CategoryModal>
          </Box>
          <Box display={"flex"} flexDir={"column"}>
            <Box
              width="100%"
              minH="100%"
              marginTop={"20px"}
              justifyContent="center"
              alignItems="center"
              display={"flex"}
              flexDirection={"column"}
            >
              {showExpenseOverview ? (
                <ProgressBar
                  progressStatus={progressStatus}
                  progressLabel={"Amount spent so far"}
                  mainBudget={mainBudget}
                  budgetSpent={budgetSpent}
                />
              ) : null}
            </Box>
            <Box>
              {showCategoryOverview ? (
                <div>
                  <Box
                    width="100%"
                    minH="100%"
                    justifyContent="center"
                    alignItems="center"
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <MultipleProgressBar
                      progressLabel={"Amount spent so far"}
                      mainBudget={mainBudget}
                      budgetSpent={budgetSpent}
                    />
                  </Box>
                </div>
              ) : null}
            </Box>
            <Box>
              {showCreateBudget ? (
                <div>
                  <Box
                    width="100%"
                    minH="100%"
                    justifyContent="center"
                    alignItems="center"
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <CreateBudgetModal
                      progressStatus={progressStatus}
                      progressLabel={"Amount spent so far"}
                      mainBudget={mainBudget}
                      budgetSpent={budgetSpent}
                    />
                  </Box>
                </div>
              ) : null}
            </Box>
            <Box>
              <BudgetBreakdown />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel backgroundColor={"white"} minH={"100%"}>
          No data available
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default MonthlyTab;
