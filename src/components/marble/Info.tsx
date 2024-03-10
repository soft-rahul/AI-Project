import { InfoCard } from "./InfoCard";
import { calculatePercentageChange } from "./utils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { ORDERS_YEAR_ONE, ORDERS_YEAR_TWO } from "../../constant/data";

interface Props {
  isChartVisible: boolean;
  toggleChartsView: () => void;
}

export const Info = ({ toggleChartsView, isChartVisible }: Props) => {
  // I'm using same data for all cards
  const totalOrdersInYearOne = ORDERS_YEAR_ONE.reduce(
    (prev, curr) => prev + curr
  );
  const totalOrdersInYearTwo = ORDERS_YEAR_TWO.reduce(
    (prev, curr) => prev + curr
  );

  const growthPercentage = calculatePercentageChange(
    totalOrdersInYearTwo,
    totalOrdersInYearOne
  );

  // For Negative value
  const negativeGrowthPercentage = calculatePercentageChange(
    totalOrdersInYearOne,
    totalOrdersInYearTwo
  );

  return (
    <div className="flex gap-4 bg-white p-3 items-center">
      <InfoCard
        label="Total Orders"
        data={{
          value: totalOrdersInYearTwo,
          percentage: growthPercentage,
        }}
      />
      <InfoCard
        label="Total Revenue"
        data={{
          value: totalOrdersInYearTwo,
          percentage: growthPercentage,
        }}
        isCurrency={true}
      />
      <InfoCard
        label="Profit"
        data={{
          value: totalOrdersInYearTwo,
          percentage: growthPercentage,
        }}
        isCurrency={true}
      />
      <InfoCard
        label="Return Orders"
        data={{
          value: totalOrdersInYearOne,
          percentage: negativeGrowthPercentage,
        }}
      />

      <div
        className="bg-gray-100 rounded-lg p-2 transition cursor-pointer"
        onClick={() => {
          toggleChartsView();
        }}
      >
        {isChartVisible ? (
          <ChevronDownIcon className="h-5 w-5" />
        ) : (
          <ChevronUpIcon className="h-5 w-5" />
        )}
      </div>
    </div>
  );
};
