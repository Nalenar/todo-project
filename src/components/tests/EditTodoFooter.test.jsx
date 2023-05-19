import { it, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import * as commonActions from "../../redux/commonSlice";
import * as todoActions from "../../redux/todoSlice";

import EditTodoFooter from "../todo/edit/components/EditTodoFooter";

vi.mock("react-redux");

const todo = {
  id: 1,
  title: "BEGIN",
  completed: false,
  list: ["today"],
};

const mockedDispatch = vi.spyOn(reduxHooks, "useDispatch");

describe("EditTodoFooter", () => {
  it("should delete todo", () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const component = render(<EditTodoFooter todo={todo} />);
    const mockedDeleteTodo = vi.spyOn(todoActions, "deleteTodo");
    const mockedEditClose = vi.spyOn(commonActions, "toggleWindows");

    expect(component).toMatchSnapshot();

    fireEvent.click(screen.getByRole("button-delete_todo"));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedDeleteTodo).toHaveBeenCalledWith({ id: todo.id });
    expect(mockedEditClose).toHaveBeenCalledWith({
      window: "editTodo",
      toggle: false,
    });
  });

  it("should close edit todo window", () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const component = render(<EditTodoFooter todo={todo} />);
    const mockedEditClose = vi.spyOn(commonActions, "toggleWindows");

    expect(component).toMatchSnapshot();

    fireEvent.click(screen.getByRole("button-close_edit"));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedEditClose).toHaveBeenCalledWith({
      window: "editTodo",
      toggle: false,
    });
  });
});
