export const Shimmer = () => {
  return (
    <section className="bg-white my-8 p-6 pb-20 rounded-lg drop-shadow-lg">
      <div className="flex gap-2 my-2">
        <div className="flex flex-col gap-2 bg-zinc-200 p-2 rounded-md">
          <div className="skeleton h-4 w-28 bg-zinc-300"></div>
          <div className="skeleton h-5 w-40 bg-zinc-300"></div>
        </div>
        <div className="flex flex-col gap-2 bg-zinc-200 p-2 rounded-md">
          <div className="skeleton h-4 w-28 bg-zinc-300"></div>
          <div className="skeleton h-5 w-40 bg-zinc-300"></div>
        </div>
        <div className="flex flex-col gap-2 bg-zinc-200 p-2 rounded-md">
          <div className="skeleton h-4 w-28 bg-zinc-300"></div>
          <div className="skeleton h-5 w-40 bg-zinc-300"></div>
        </div>
        <div className="flex flex-col gap-2 bg-zinc-200 p-2 rounded-md">
          <div className="skeleton h-4 w-28 bg-zinc-300"></div>
          <div className="skeleton h-5 w-40 bg-zinc-300"></div>
        </div>
      </div>
      <div>
        <div className="skeleton h-40 w-full bg-gray-200 rounded-lg my-2"></div>
      </div>
    </section>
  );
};
