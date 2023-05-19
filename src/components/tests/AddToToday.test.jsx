import { it, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import * as actions from "../../redux/todoSlice";

import AddToToday from "../todo/edit/components/AddToToday";

vi.mock("react-redux");

const todo = {
  id: 1,
  title: "today",
  completed: true,
  list: ["today"],
};

const mockedDispatch = vi.spyOn(reduxHooks, "useDispatch");

describe("AddToToday", () => {
  it("should toggle today category from todo item", () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedToggleList = vi.spyOn(actions, "toggleList");

    render(<AddToToday todo={todo} />);

    fireEvent.click(screen.getByRole("button-add_to_today"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedToggleList).toHaveBeenCalledWith({
      id: todo.id,
      list: "today",
      toggle: !todo.list.includes("today"),
    });

    fireEvent.click(screen.getByRole("button-add_to_today"));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedToggleList).toHaveBeenCalledWith({
      id: todo.id,
      list: "today",
      toggle: !todo.list.includes("today"),
    });
  });
});
