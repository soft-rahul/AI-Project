import { Shimmer } from "../shimmer";
import { Container } from "./Container";
import { useEffect, useState } from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <main className="my-6">
      <div className="my-1 flex gap-2 items-center">
        <h1 className="page-title text-gray-700"> Sales Report</h1>
        <ChartBarIcon className="h-5 w-5" />
      </div>
      {isLoading ? <Shimmer /> : <Container />}
    </main>
  );
};
