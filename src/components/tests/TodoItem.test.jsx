import { it, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import * as todoActions from "../../redux/todoSlice";
import * as commonActions from "../../redux/commonSlice";

import TodoItem from "../todo/TodoItem";

vi.mock("react-redux");

const todo = {
  id: 1,
  title: "today",
  completed: true,
  list: ["today"],
};

const mockedDispatch = vi.spyOn(reduxHooks, "useDispatch");

describe("TodoItem", () => {
  it("should create TodoItem", () => {
    mockedDispatch.mockReturnValue(vi.fn());

    const component = render(<TodoItem todo={todo} />);

    expect(component).toMatchSnapshot();
  });

  it("should dispatch actions", () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedToggleComplete = vi.spyOn(todoActions, "toggleComplete");
    const mockedToggleImportant = vi.spyOn(todoActions, "toggleList");
    const mockedToggleWindows = vi.spyOn(commonActions, "toggleWindows");
    const mockedEditTodo = vi.spyOn(commonActions, "editTodo");

    render(<TodoItem todo={todo} />);

    fireEvent.click(screen.getByRole("button-complete"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedToggleComplete).toHaveBeenCalledWith({
      id: todo.id,
      completed: !todo.completed,
    });

    fireEvent.click(screen.getByRole("button-important"));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedToggleImportant).toHaveBeenCalledWith({
      id: todo.id,
      list: "important",
      toggle: !todo.list.includes("important"),
    });

    fireEvent.click(screen.getByRole("todo-item"));

    expect(dispatch).toHaveBeenCalledTimes(4);
    expect(mockedToggleWindows).toHaveBeenCalledWith({
      window: "editTodo",
      toggle: true,
    });
    expect(mockedEditTodo).toHaveBeenCalledWith({ id: todo.id });
  });
});
