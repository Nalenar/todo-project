import { it, expect, describe, vi } from "vitest";
import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import TodoList from "../todo/TodoList";

vi.mock("react-redux");

const mockedSelector = vi.spyOn(reduxHooks, "useSelector");

const todos = [
  {
    id: 1,
    title: "today",
    completed: true,
    list: ["today"],
  },
  {
    id: 2,
    title: "important",
    completed: false,
    list: ["important"],
  },
];

const blur = true;

describe("TodoList", () => {
  it("should create TodoList with empty todos", () => {
    mockedSelector.mockReturnValue([]);

    const component = render(
      <TodoList listId="tasks" listTitle="Задачи" listEdit={false} />,
      { wrapper: Router }
    );

    expect(component).toMatchSnapshot();
  });

  it("should create TodoList with todo items", () => {
    mockedSelector.mockReturnValue(todos);

    const component = render(
      <TodoList listId="tasks" listTitle="Задачи" listEdit={false} />,
      { wrapper: Router }
    );

    expect(component).toMatchSnapshot();
  });

  it("shoud create Todolist with todo items in today list", () => {
    mockedSelector.mockReturnValue(todos);

    const component = render(
      <TodoList listId="today" listTitle="Мой день" listEdit={false} />,
      { wrapper: Router }
    );

    expect(component).toMatchSnapshot();
  });
});
