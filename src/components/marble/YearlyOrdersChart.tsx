import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MONTHS, ORDERS_YEAR_ONE, ORDERS_YEAR_TWO } from "../../constant/data";

// Mockup Data for chart.
const DATA = MONTHS.map((month, index) => {
  return {
    name: month,
    "2024": ORDERS_YEAR_ONE[index],
    "2023": ORDERS_YEAR_TWO[index],
  };
});

const DataFormater = (number: number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toString() + "K";
  } else {
    return number.toString();
  }
};

export const YearlyOrders = () => {
  return (
    <div className="bg-white p-4 w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={DATA}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis tickFormatter={DataFormater} />
          <Tooltip
            formatter={(value, name) => {
              const formattedValue = DataFormater(Number(value));
              const formattedName = `Orders - ${name}`;
              return [formattedValue, formattedName];
            }}
          />
          <Legend iconSize={16} iconType="plainline" />
          <Line
            type="natural"
            dataKey="2024"
            stroke="#1e90ff"
            strokeWidth={6}
            dot={false}
          />
          <Line
            type="natural"
            strokeDasharray={"6 6 6"}
            dot={false}
            dataKey="2023"
            stroke="#1e90ff"
            strokeWidth={5}
            opacity={0.1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
