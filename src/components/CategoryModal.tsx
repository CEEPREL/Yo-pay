"use client";
import { useGlobalContext } from "@/Contex/GlobalContext";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

export interface GenericDialogProps {
  isOpen: boolean;
  onClose?: () => void;
  disableOverlayClick?: boolean;
  showCloseButton?: boolean;
}

interface Props extends GenericDialogProps {
  children: React.ReactNode;
}

const CategoryModal = ({ isOpen, onClose, disableOverlayClick }: Props) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && !disableOverlayClick) {
      onClose?.();
    }
  };

  const {
    modalOpen,
    setModalOpen,
    setShowExpenseOverview,
    setShowCategoryOverview,
    setShowCreateBudget,
  } = useGlobalContext();
  return (
    <>
      {modalOpen && (
        <Box
          onClick={() => setModalOpen(false)}
          pos="relative"
          left={-4}
          width="100vw"
          maxW="500px"
          height="100vh"
          overflow="hidden"
          backgroundColor="rgba(252, 252, 252, 0.7)"
          zIndex="1"
        >
          <Box
            backgroundColor="white"
            onClick={handleOverlayClick}
            right={0}
            gap={"8px"}
            top={0}
            width="40%"
            minHeight="100px"
            pos="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            fontWeight="semibold"
            fontSize={"12px"}
          >
            <Text
              onClick={() => {
                setShowExpenseOverview(true);
                setShowCategoryOverview(false);
                setShowCreateBudget(false);
              }}
              cursor="pointer"
            >
              <span className="text-black p-[2px] mr-2 bg-blue-300 rounded-full line-through">
                N
              </span>{" "}
              Expenses Overview
            </Text>
            <Text
              onClick={() => {
                setShowExpenseOverview(false);
                setShowCategoryOverview(true);
                setShowCreateBudget(false);
              }}
              cursor="pointer"
            >
              <span className="text-black p-[2px] mr-2 bg-blue-300 rounded-full line-through">
                N
              </span>{" "}
              Category Overview
            </Text>
            <Text
              onClick={() => {
                setShowExpenseOverview(false);
                setShowCategoryOverview(false);
                setShowCreateBudget(true);
              }}
              cursor="pointer"
            >
              <span className="text-black p-[2px] mr-2 bg-blue-300 rounded-full line-through">
                N
              </span>{" "}
              Create Budget
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CategoryModal;
