import { useState } from "react";

import { Menu } from "./Menu";

import { PencilIcon } from "@heroicons/react/24/outline";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

interface Props {
  label: string;
  data: {
    value: number;
    percentage: number;
  };
  isCurrency?: boolean;
}

export const InfoCard = ({ label, data, isCurrency }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(true);
  };

  const isPositive = data.percentage >= 0;

  return (
    <div
      onMouseLeave={() => {
        setShowMenu(false);
      }}
      className="flex gap-4 grow  bg-gray-50 hover:bg-gray-200 p-4 rounded-lg group"
    >
      <div className="flex grow  flex-col gap-1">
        <h2 className="font-semibold border-dashed border-b-2 border-gray-200 group-hover:border-gray-400">
          {label}
        </h2>
        <div className="flex gap-2">
          <h2 className="font-bold">
            {isCurrency
              ? `$${data.value.toLocaleString()}`
              : `${data.value.toLocaleString()}`}
          </h2>
          <div className="flex gap-0 items-center">
            {isPositive ? (
              <ChevronUpIcon className="h-4 w-4" />
            ) : (
              <ChevronDownIcon className="h-4 w-4" />
            )}
            <h4 className="text-xs font-semibold">
              {data.percentage.toFixed(0)}%
            </h4>
          </div>
        </div>
      </div>

      <div className="self-baseline p-1 rounded-md mt-1 cursor-pointer invisible group-hover:visible  hover:bg-gray-300 relative">
        <PencilIcon onClick={handleClick} className="h-4 w-4" />
        {showMenu && (
          <div className="absolute z-50 top-8 w-60 py-3 px-2 bg-white rounded-lg shadow-md">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};
