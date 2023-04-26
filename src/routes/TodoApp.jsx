import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleWindows, toggleStyles } from "../redux/commonSlice";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Settings from "../components/settings/Settings";
import EditTodo from "../components/todo/edit/EditTodo";

const TodoApp = () => {
  const menu = useSelector((state) => state.style.windows.menu);
  const settings = useSelector((state) => state.style.windows.settings);
  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "menu", toggle: false }));
    dispatch(toggleWindows({ window: "settings", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  return (
    <>
      <Header menu={menu} settings={settings} />

      <EditTodo />

      {!menu ? <></> : <Menu />}

      {!settings ? <></> : <Settings />}

      <Outlet />
    </>
  );
};

export default TodoApp;
