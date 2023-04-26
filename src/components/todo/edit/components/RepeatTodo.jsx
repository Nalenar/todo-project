import { Icon } from "@iconify/react";

const RepeatTodo = () => {
  return (
    <div className="mt-4 flex w-full flex-col justify-center border border-gray-200 bg-white text-[#818181] shadow-md">
      <button className="flex items-center px-2">
        <Icon icon="line-md:chevron-small-double-right" className="text-3xl" />
        <p className="py-2 pl-2 text-lg">Повторить завтра</p>
      </button>
      <hr />
      <button className="flex items-center px-2">
        <Icon icon="line-md:chevron-small-triple-right" className="text-3xl" />
        <p className="py-2 pl-2 text-lg">Повторить через...</p>
      </button>
    </div>
  );
};

export default RepeatTodo;
