import { Info } from "./Info";
import { useState } from "react";
import { YearlyOrders } from "./YearlyOrdersChart";

export const Container = () => {
  const [isChartVisible, setIsChartVisible] = useState(true);
  const toggleChartVisibility = () => {
    setIsChartVisible(!isChartVisible);
  };
  return (
    <div className="my-4 shadow-lg rounded-xl p-4 bg-white overflow-x-auto">
      <Info
        isChartVisible={isChartVisible}
        toggleChartsView={toggleChartVisibility}
      />
      {isChartVisible && <YearlyOrders />}
    </div>
  );
};
