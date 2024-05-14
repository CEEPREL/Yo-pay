"use client";
import BottomNav from "@/components/BottomNav";
import BudgetHeader from "@/components/BudgetHeader";
import MonthlyTab from "@/components/MonthlyTab";
import { Box } from "@chakra-ui/react";
import { useGlobalContext } from "@/Contex/GlobalContext";
import CreateNewBudget from "@/components/CreateNewBudget";

function Home() {
  const {
    setShowCreateNewBudget,
    showCreateNewBudget,
    setTotalBudgetAmount,
    totalBudgetAmount,
  } = useGlobalContext();

  let budgetAmont = setTotalBudgetAmount(120000);
  let progressPercent = 49;
  let budgetAmountSpent = 50000;

  return (
    <>
      {showCreateNewBudget ? (
        <Box paddingRight={"8px"}>
          <CreateNewBudget />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          height={"100%"}
          minHeight="100%"
        >
          <Box zIndex={"1"} width="100%" maxWidth="500px">
            {" "}
            <BudgetHeader
              totalBudget={totalBudgetAmount}
              budgetlabel="Monthly Budget"
              headertitle="Budget"
            />
            <MonthlyTab
              tab1="Last Month"
              tab2="This Month"
              progressStatus={progressPercent}
              progressLabel="Amount spent so far"
              budgetSpent={budgetAmountSpent}
              mainBudget={totalBudgetAmount}
              isOpen={false}
            />
            <BottomNav />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Home;
