"use client";
import { usePathname } from "next/navigation";
import { Box, Flex, Image, Text, Link, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import {
  HomeIcon,
  ReportIcon,
  ChatIcon,
  ProfileIcon,
  BudgetIcon,
} from "./Svgs";

const BottomNav = () => {
  const pathName = usePathname();

  const isParamActive = (route: string) => {
    if (route === pathName) return true;
    return false;
  };

  const NavLinks = [
    {
      label: "Home",
      Icon: HomeIcon,
      uri: "/Home",
    },
    {
      label: "Reports",
      Icon: ReportIcon,
      uri: "/Reports",
    },
    {
      label: "Chat",
      Icon: ChatIcon,
      uri: "/Chat",
    },
    {
      label: "Budget",
      Icon: BudgetIcon,
      uri: "/",
    },
    {
      label: "Profile",
      Icon: ProfileIcon,
      uri: "/Profile",
    },
  ];
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box
      position={"fixed"}
      alignItems="center"
      maxWidth="500px"
      width="100%"
      mr={"20px"}
      bg="white"
      zIndex={10}
      bottom={"0px"}
      //rgb(242 246 255 / 9%)
    >
      <Flex justify="space-around">
        {NavLinks.map((navItem) => (
          <Flex
            direction="column"
            align="center"
            key={navItem?.uri}
            // active={isParamActive(navItem?.uri)}
          >
            <navItem.Icon
              size={32}
              color={isParamActive(navItem.uri) ? "blue" : "gray"}
            />
            <Text fontSize="sm" mt={1}>
              {navItem?.label}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default BottomNav;
