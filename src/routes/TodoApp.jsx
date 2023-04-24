import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleWindows, toggleStyles } from "../redux/styleSlice";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Settings from "../components/settings/Settings";

const TodoApp = () => {
  const menu = useSelector((state) => state.style.windows["menu"]);
  const settings = useSelector((state) => state.style.windows["settings"]);
  const dispatch = useDispatch();

  const handleClickAway = () => {
    dispatch(toggleWindows({ window: "menu", toggle: false }));
    dispatch(toggleWindows({ window: "settings", toggle: false }));
    dispatch(toggleStyles({ style: "blur", string: "" }));
  };

  return (
    <>
      <Header menu={menu} settings={settings} />

      {!menu ? <></> : <Menu onClickAway={handleClickAway} />}

      {!settings ? <></> : <Settings onClickAway={handleClickAway} />}

      <Outlet />
    </>
  );
};

export default TodoApp;
