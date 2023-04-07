import { useState } from "react";
import TaskInput from "./TaskInput";

const Day = () => {
  const [task, setTask] = useState("");

  const handleTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="border border-red-500 flex flex-col overflow-hidden">
      <h2 className="text-3xl my-5 font-roboto text-center text-blue-700">
        Мой день
      </h2>
      <TaskInput handleTask={handleTask} />
    </div>
  );
};

export default Day;
