import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { MONTHS, ORDERS_YEAR_ONE, ORDERS_YEAR_TWO } from "../../constant/data";

const DATA = MONTHS.map((month, index) => {
  return {
    name: month,
    "2024": ORDERS_YEAR_ONE[index],
    "2023": ORDERS_YEAR_TWO[index],
  };
});

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="2024"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="2023" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
