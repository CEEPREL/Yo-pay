"use client";
import React, { useState, useEffect } from "react";
import { Box, Select } from "@chakra-ui/react";
import { useGlobalContext } from "@/Contex/GlobalContext";
import {
  FoodSvg,
  Savings,
  SavingsSvg,
  ShoppingSvg,
  Shopping,
  Food,
} from "./Svgs";

interface Props {
  inputValue: number;
  e: React.ChangeEvent<HTMLInputElement>;
  // budgetArr: object[]
}

interface Budget {
  label: string;
  amount: number;
  svg?: any;
  budgetpercent?: string;
  id: number;
  innerColor: string;
  progressColor: string;
  Icon: any;
  remPercent: number;
  amountRemaining: number;
}

function CreateNewBudget() {
  const [currentPage, setCurrentPage] = useState(1);
  const [budgetAmount, setBudgetAmount] = useState("");
  const [newbudgetAmount, setNewBudgetAmount] = useState<string>("₦0");
  const [renderBudgetOption, setRenderBudgetOption] = useState<string>("");

  const [newAmount, setNewAmount] = useState<number>(0);

  const [budgetArr, setBudgetArr] = useState<Budget[]>([]);

  // const budgetArr = [
  //   { label: "Savings", amount: 12000, svg: SavingsSvg, budgetpercent: 10 },
  // ];

  const {
    setTotalBudgetAmount,
    setShowCreateNewBudget,
    showRenderedBudget,
    setShowRenderedBudget,
    totalBudgetAmount,
  } = useGlobalContext();

  // const mainBudgetAmount = totalBudgetAmount;

  const handleNextPage = () => {
    if (currentPage < 3) setCurrentPage(currentPage + 1);
    if (currentPage === 3) setShowCreateNewBudget(false);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    if (currentPage === 1) setShowCreateNewBudget(false);
  };

  const handleInputFocus = () => {
    if (!budgetAmount.startsWith("₦")) {
      setBudgetAmount("₦");
    }
  };

  const outputPercent = () => {
    return ((100 * newAmount) / totalBudgetAmount).toFixed(1);
  };
  // const amountRem = () => {
  //   return (( newAmount) / totalBudgetAmount).toFixed(1);
  // };
  const outputPercentRemaining = () => {
    return (100 - (100 * newAmount) / totalBudgetAmount).toFixed(1);
  };

  let percentAmount = outputPercent;

  useEffect(() => {
    const storedRenderOption = localStorage.getItem("renderBudgetOption");
    if (storedRenderOption) {
      setRenderBudgetOption(storedRenderOption);
    }
  }, []);

  const renderAmount = (e: any) => {
    const { value } = e.target;
    const inputValue = value.replace("₦", "");
    setBudgetAmount(`₦${inputValue}`);
    const numericValue = inputValue.replace("₦", "");
    const amount = parseFloat(numericValue);
    setNewBudgetAmount(`₦${isNaN(amount) ? "0" : amount}`);
    setNewAmount(isNaN(amount) ? 0 : amount);
  };
  const handlePlusClick = () => {
    if (renderBudgetOption && budgetAmount) {
      const numericAmount = parseFloat(budgetAmount.replace("₦", "").trim());

      let selectedLabel = "";
      let selectedSvg = null;
      let budgetPercent = "";
      let SelectedinnerColor = "";
      let SelectedprogressColor = "";
      let SelectedIcon = null;
      let Remainpercent = 0;
      let amountRem = 0;

      switch (renderBudgetOption) {
        case "savings":
          selectedLabel = "Savings";
          selectedSvg = SavingsSvg;
          budgetPercent = percentAmount();
          SelectedIcon = Savings;
          SelectedinnerColor = "green.100";
          SelectedprogressColor = "green.400";
          Remainpercent = 20;
          amountRem = newAmount * 0.2;
          break;
        case "food_and_drinks":
          selectedLabel = "Food and Drink";
          selectedSvg = FoodSvg;
          budgetPercent = percentAmount();
          SelectedIcon = Food;
          SelectedinnerColor = "orange.100";
          SelectedprogressColor = "orange.400";
          Remainpercent = 40;
          amountRem = newAmount * 0.6;

          break;
        case "shopping":
          selectedLabel = "Shopping";
          selectedSvg = ShoppingSvg;
          budgetPercent = percentAmount();
          SelectedIcon = Shopping;
          SelectedinnerColor = "purple.100";
          SelectedprogressColor = "purple.400";
          Remainpercent = 60;
          amountRem = newAmount * 0.4;

          break;
        default:
          break;
      }

      const newItem: Budget = {
        id: Date.now(),
        label: selectedLabel,
        amount: numericAmount,
        svg: selectedSvg,
        budgetpercent: budgetPercent,
        innerColor: SelectedinnerColor,
        progressColor: SelectedprogressColor,
        Icon: SelectedIcon,
        remPercent: Remainpercent,
        amountRemaining: amountRem,
      };

      setShowRenderedBudget([...showRenderedBudget, newItem]);
    } else {
      console.error("Please select an expense category and enter an amount.");
    }
  };

  const removeItem = (itemToRemove: number) => {
    const updatedBudgetArr = showRenderedBudget.filter(
      (item) => item.id !== itemToRemove
    );
    setShowRenderedBudget(updatedBudgetArr);
  };

  const budgetRender = (e: any) => {
    const { value } = e.target;

    setRenderBudgetOption(value);
  };

  const handleInputBlur = () => {
    if (budgetAmount === "₦") {
      setBudgetAmount("");
    }
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h1 className="font-extrabold text-3xl pl-4">Create new budget</h1>
            <h5 className="text-gray-500 w-[60%] text-[15px] px-4">
              How much would you like to budget for this month?
            </h5>
            <div className="pl-4">
              <input
                className="text-[20px] font-semibold p-3 border-b-2 w-[70%] placeholder:text-gray-500"
                placeholder="Amount (in ₦)"
                value={budgetAmount}
                onChange={renderAmount}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h1 className="font-extrabold text-3xl pl-4">Create new budget</h1>
            <h5 className="text-gray-500 w-[70%] text-[15px] px-4">
              How much would you like to spend on each category this month?
            </h5>
            <div className="pl-4">
              <Select
                onChange={budgetRender}
                w="70%"
                placeholder="Select Expense Category"
              >
                <option value="savings">Savings</option>
                <option value="food_and_drinks">Food and Drinks</option>
                <option value="shopping">Shopping</option>
              </Select>
              <input
                className="text-[20px] font-semibold p-3 border-b-2 w-[70%] placeholder:text-gray-500"
                placeholder="Amount (in ₦)"
                value={budgetAmount}
                onChange={renderAmount}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <div className="flex flex-row pt-14  justify-between">
                <h5 className="cursor-pointer font-semibold text-blue-500">
                  % of budget: {outputPercent()}%
                </h5>
                <div
                  onClick={handlePlusClick}
                  className="cursor-pointer mr-4 text-3xl text-blue-800 flex items-center justify-center bg-blue-300 rounded-full w-10 h-10"
                >
                  +
                </div>
              </div>
              <div className="flex flex-col mt-5 gap-6">
                {showRenderedBudget.map((budgetItem) => (
                  <div
                    key={budgetItem.id}
                    className="flex  flex-row justify-between"
                  >
                    <div className="flex flex-row">
                      <div>
                        <budgetItem.svg />
                      </div>
                      <h3 className="px-4 w-full">{budgetItem.label}</h3>
                    </div>
                    <h3>₦{budgetItem.amount}</h3>
                    <h3>{budgetItem.budgetpercent}%</h3>
                    <div
                      onClick={() => removeItem(budgetItem.id)}
                      className="w-8 h-8 flex mr-4 font justify-center text-4xl items-center text-md rounded-full bg-slate-300 text-gray-800"
                    >
                      -
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h1 className="font-extrabold text-3xl pl-4">
              Budget successfully created!
            </h1>
            <div className="pl-4">
              <h5 className="text-gray-500 w-[70%] italic text-[15px] px-4">
                press done to go to budget page
              </h5>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100%"
      minHeight="100%"
    >
      <Box zIndex="1" width="100%" maxWidth="500px">
        <div className="w-full fixed flex flex-row justify-between pt-10 p-4 bg-white">
          <h1 className="text-sm font-extrabold" onClick={handlePrevPage}>
            {currentPage === 1 ? "Back" : "Prev"}
          </h1>
          <h1 className="text-sm font-extrabold">{currentPage}/3</h1>
        </div>
        <div className="pt-20 cursor-text flex max-w-[500px] flex-col gap-4">
          {renderPageContent()}
        </div>
      </Box>
      <div className="fixed max-w-[500px] px-4 w-full bottom-10">
        <div className="text-[12px] flex justify-between p-3">
          {currentPage > 1 ? (
            <h3 className=" text-gray-600">
              % of budget remaining:{outputPercentRemaining()}
            </h3>
          ) : (
            <h3 className=" text-gray-600">Create your budget</h3>
          )}
          <h3
            className="text-blue-500 flex place-items-end justify-end max-w-[500px] font-bold"
            onClick={handleNextPage}
          >
            {currentPage === 3 ? "Done" : "Next"}
          </h3>
        </div>
      </div>
    </Box>
  );
}

export default CreateNewBudget;
