"use client";
import { SetState } from "@/utils/global.type";
import { createContext, useContext, useState } from "react";

export interface Props {
  children?: React.ReactNode;
}
export interface IGlobalContext {
  modalOpen: boolean;
  setModalOpen: SetState<boolean>;
  showExpenseOverview: boolean;
  setShowExpenseOverview: SetState<boolean>;
  showCategoryOverview: boolean;
  setShowCategoryOverview: SetState<boolean>;
  setShowCreateBudget: SetState<boolean>;
  showCreateBudget: boolean;
  setShowCreateNewBudget: SetState<boolean>;
  showCreateNewBudget: boolean;
  setTotalBudgetAmount: SetState<number>;
  totalBudgetAmount: number;
  showRenderedBudget: Budget[];
  setShowRenderedBudget: SetState<Budget[]>;
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

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({ children }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showExpenseOverview, setShowExpenseOverview] = useState(true);
  const [showCategoryOverview, setShowCategoryOverview] = useState(false);
  const [showCreateBudget, setShowCreateBudget] = useState(false);
  const [showCreateNewBudget, setShowCreateNewBudget] = useState(false);
  const [totalBudgetAmount, setTotalBudgetAmount] = useState(0);
  const [showRenderedBudget, setShowRenderedBudget] = useState<Budget[]>([]);

  const value = {
    modalOpen,
    setModalOpen,
    showExpenseOverview,
    setShowExpenseOverview,
    showCategoryOverview,
    setShowCategoryOverview,
    setShowCreateBudget,
    showCreateBudget,
    setShowCreateNewBudget,
    showCreateNewBudget,
    setTotalBudgetAmount,
    totalBudgetAmount,
    showRenderedBudget,
    setShowRenderedBudget,
  };

  return (
    <GlobalContext.Provider value={value as IGlobalContext}>
      {children}{" "}
    </GlobalContext.Provider>
  );
};
