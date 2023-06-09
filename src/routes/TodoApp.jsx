import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Settings from "../components/settings/Settings";
import EditTodo from "../components/todo/edit/EditTodo";

const TodoApp = () => {
  const menu = useSelector((state) => state.common.windows.menu);
  const settings = useSelector((state) => state.common.windows.settings);

  return (
    <>
      <Header menu={menu} settings={settings} />

      <EditTodo />

      <Menu menu={menu} />

      <Settings settings={settings} />

      <Outlet />
    </>
  );
};

export default TodoApp;
