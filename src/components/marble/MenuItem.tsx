import {
  QuestionMarkCircleIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";

interface Props {
  title: string;
}

export const MenuItem = ({ title }: Props) => {
  return (
    <div className="bg-white flex gap-2 justify-between items-center p-1 ">
      <div>
        <PresentationChartLineIcon className="h-4 w-4" />{" "}
      </div>
      <div className="text-sm text-nowrap text-ellipsis capitalize group">
        {title}
      </div>
      <div className="hidden group-hover:block">
        <QuestionMarkCircleIcon className="h-4 w-4" />
      </div>
    </div>
  );
};
