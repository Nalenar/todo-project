import { Icon } from "@iconify/react";

const RepeatTodo = () => {
  return (
    <div className="mt-4 flex w-full flex-col justify-center rounded-md border border-gray-200 bg-white text-[#818181] shadow-md dark:bg-gray-600">
      <button className="flex items-center px-2">
        <Icon
          icon="line-md:chevron-small-double-right"
          className="text-3xl dark:text-gray-200"
        />
        <p className="py-2 pl-2 text-lg dark:text-gray-200">Повторить завтра</p>
      </button>
      <hr className="dark:border-gray-200" />
      <button className="flex items-center px-2">
        <Icon
          icon="line-md:chevron-small-triple-right"
          className="text-3xl dark:text-gray-200"
        />
        <p className="py-2 pl-2 text-lg dark:text-gray-200">
          Повторить через...
        </p>
      </button>
    </div>
  );
};

export default RepeatTodo;
