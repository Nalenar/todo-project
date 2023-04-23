import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addBlur, deleteBlur } from "../redux/styleSlice";

import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Settings from "../components/Settings";

const TodoApp = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [settingsButton, setSettingsButton] = useState(false);

  const dispatch = useDispatch();

  const handleMenuButtonClick = () => {
    setMenuButton((prev) => !prev);
    setSettingsButton(false);
    if (!menuButton) {
      dispatch(addBlur());
    } else {
      dispatch(deleteBlur());
    }
  };
  const handleSettingsButtonClick = () => {
    setSettingsButton((prev) => !prev);
    setMenuButton(false);
    if (!settingsButton) {
      dispatch(addBlur());
    } else {
      dispatch(deleteBlur());
    }
  };

  const handleClickAway = () => {
    setMenuButton(false);
    setSettingsButton(false);
    dispatch(deleteBlur());
  };

  return (
    <>
      <Header
        menuButton={menuButton}
        settingsButton={settingsButton}
        onMenuClick={handleMenuButtonClick}
        onSettingsClick={handleSettingsButtonClick}
      />
      {!menuButton ? (
        <></>
      ) : (
        <Menu
          onClickAway={handleClickAway}
          onLinkClick={handleMenuButtonClick}
        />
      )}
      {!settingsButton ? <></> : <Settings onClickAway={handleClickAway} />}
      <Outlet />
    </>
  );
};

export default TodoApp;
