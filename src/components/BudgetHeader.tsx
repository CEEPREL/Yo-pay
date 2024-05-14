"use client";
import React from "react";
import { useGlobalContext } from "@/Contex/GlobalContext";

interface Props {
  headertitle: string;
  totalBudget: number;
  budgetlabel: String;
}

const BudgetHeader = ({ totalBudget, budgetlabel, headertitle }: Props) => {
  const {
    setShowCreateBudget,
    showCreateBudget,
    setShowCreateNewBudget,
    showCreateNewBudget,
  } = useGlobalContext();
  return (
    <>
      <div className=" w-full fixed p-4 bg-white">
        <h1 className=" text-3xl font-extrabold ">{headertitle}</h1>
      </div>
      <div className="pt-20 cursor-text flex max-w-[500px] flex-col gap-6">
        <h5 className=" pl-4">
          <span className=" bg-blue-300 rounded-full p-1 line-through">₦</span>{" "}
          {budgetlabel}
        </h5>
      </div>
      <div className="pl-4 shadow-lg m-4">
        {showCreateBudget ? (
          <div className=" flex flex-row p-1 justify-between">
            <h3 className=" font-bold text-2xl">Create a budget</h3>
            <div
              onClick={() => setShowCreateNewBudget(true)}
              className="cursor-pointer text-3xl text-blue-800 flex justify-center bg-blue-300 rounded-full w-10 h-10"
            >
              +
            </div>
          </div>
        ) : (
          <h1 className=" text-3xl font-extrabold ">
            <span className="line-through">₦</span>
            {totalBudget}
          </h1>
        )}
      </div>
    </>
  );
};

export default BudgetHeader;
