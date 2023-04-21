import { useState } from "react";
import { useDispatch } from "react-redux";

import { AddBlur, deleteBlur } from "../../redux/styleSlice";

import HeaderButton from "./HeaderButton";
import Menu from "../Menu";
import Settings from "../Settings";

const Header = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [settingsButton, setSettingsButton] = useState(false);
  const dispatch = useDispatch();

  const handleMenuButtonClick = () => {
    setMenuButton((prev) => !prev);
    if (!menuButton) {
      dispatch(AddBlur());
    } else {
      dispatch(deleteBlur());
    }
  };
  const handleSettingsButtonClick = () => {
    setSettingsButton((prev) => !prev);
    if (!settingsButton) {
      dispatch(AddBlur());
    } else {
      dispatch(deleteBlur());
    }
  };

  return (
    <>
      <div className="flex h-12 w-full items-center bg-blue-500">
        {/* Menu Button */}
        <div className="ml-1 flex h-11 w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700">
          <HeaderButton
            icon="ion:menu"
            onButtonClick={handleMenuButtonClick}
            button={menuButton}
          />
        </div>

        <h1 className="ml-5 font-roboto text-4xl font-bold text-white">
          DayUp
        </h1>

        {/* Settings Button */}
        <div className="ml-5 flex h-11 w-full justify-end">
          <div className="mr-1 flex h-full w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700">
            <HeaderButton
              icon="ion:settings-outline"
              onButtonClick={handleSettingsButtonClick}
              button={settingsButton}
            />
          </div>
        </div>
      </div>

      {!menuButton ? <></> : <Menu onLinkClick={handleMenuButtonClick} />}
      {!settingsButton ? <></> : <Settings />}
    </>
  );
};

export default Header;
