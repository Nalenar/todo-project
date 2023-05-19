import { it, expect, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import * as listActions from "../../redux/listSlice";
import * as commonActions from "../../redux/commonSlice";

import EditListForm from "../todo/edit/EditListForm";

vi.mock("react-redux");

const list = {
  id: "HELP ME",
  title: "HELP ME",
};

const mockedDispatch = vi.spyOn(reduxHooks, "useDispatch");

describe("EditListForm", () => {
  it("should create new list", () => {
    const component = render(<EditListForm {...list} />);

    expect(component).toMatchSnapshot();
  });

  it("should not rename list", () => {
    const dispatch = vi.fn();
    mockedDispatch.mockReturnValue(dispatch);

    const mockedRenameCategory = vi.spyOn(listActions, "renameCategory");
    const mockedToggleWindows = vi.spyOn(commonActions, "toggleWindows");

    render(<EditListForm {...list} />);

    fireEvent.submit(screen.getByRole("button-edit_list"));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedRenameCategory).toHaveBeenCalledWith({
      id: list.id,
      title: "",
    });
    expect(mockedToggleWindows).toHaveBeenCalledWith({
      window: "editList",
      toggle: false,
    });
  });
});
