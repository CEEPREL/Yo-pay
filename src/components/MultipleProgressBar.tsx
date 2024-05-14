import { PieChart, Pie, Cell, Layer } from "recharts";
import React from "react";
import { Box, Text, Tabs } from "@chakra-ui/react";
import { color } from "highcharts";
import {
  Settings,
  TransportSvg,
  CallSvg,
  ShoppingSvg,
  FoodSvg,
  SavingsSvg,
} from "./Svgs";

interface OutterLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  cornerRadius: number;
}
interface Props {
  progressLabel: string;
  budgetSpent: number;
  mainBudget: number;
}

const data01 = [
  {
    name: "",
    value: 100,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
    color: "green",
  },
  {
    name: "Group B",
    value: 4567,
    color: "blue",
  },
  {
    name: "Group C",
    value: 1398,
    color: "black",
  },
  {
    name: "Group D",
    value: 9800,
    color: "yeello",
  },
  {
    name: "Group E",
    value: 3908,
    color: "orange",
  },
  {
    name: "Group F",
    value: 4800,
    color: "red",
  },
];

const OutterLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  cornerRadius,
}: OutterLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const labelRadius = outerRadius + 40;
  const labelData = data02[index];

  const x = cx + labelRadius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + labelRadius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill={labelData.color}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
      fontWeight={"bold"}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CenterContent = () => (
  <Box maxH={"0px"} bg={"black"} maxW={"0x"}>
    <svg transform="translate(130, -220)">
      <Settings />
    </svg>
    <svg transform="translate(95, -330)">
      <TransportSvg />
    </svg>
    <svg transform="translate(95, -440)">
      <CallSvg />
    </svg>
    <svg transform="translate(120, -550)">
      <ShoppingSvg />
    </svg>
    <svg transform="translate(185, -710)">
      <FoodSvg />
    </svg>
    <svg transform="translate(185, -940)">
      <SavingsSvg />
    </svg>
  </Box>
  // </Box>
);

function MultipleProgressBar({
  progressLabel,
  budgetSpent,
  mainBudget,
}: Props) {
  return (
    <Tabs>
      <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
        <Box position="relative" width={315} height={295}>
          <PieChart width={315} height={295}>
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={100}
              labelLine={false}
              label={OutterLabel}
              cornerRadius={50}
              // fill={color}
            >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={120}
              fill="#CADDF1"
            />
          </PieChart>
          <Box>
            <CenterContent />
          </Box>
        </Box>

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
    </Tabs>
  );
}

export default MultipleProgressBar;
