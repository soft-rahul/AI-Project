import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Shimmer = () => {
  return (
    <section className="bg-white my-8 p-6 pb-20 rounded-lg drop-shadow-lg">
      <div className="flex gap-2 items-center my-6">
        <div className="flex flex-col gap-4 grow bg-gray-50 p-4 rounded-lg">
          <div className="skeleton h-4 w-40 bg-gray-300"></div>
          <div className="skeleton h-5 w-full bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4 grow bg-gray-50 p-4 rounded-lg">
          <div className="skeleton h-4 w-40 bg-gray-300"></div>
          <div className="skeleton h-5 w-full bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4 grow bg-gray-50 p-4 rounded-lg">
          <div className="skeleton h-4 w-40 bg-gray-300"></div>
          <div className="skeleton h-5 w-full bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-4 grow bg-gray-50 p-4 rounded-lg">
          <div className="skeleton h-4 w-40 bg-gray-300"></div>
          <div className="skeleton h-5 w-full bg-gray-300"></div>
        </div>
        <div className="p-2 rounded-lg bg-gray-100">
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>
      <div>
        <div className="skeleton h-60 w-full bg-gray-300 rounded-lg my-2"></div>
      </div>
    </section>
  );
};
