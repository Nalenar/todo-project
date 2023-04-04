import { useState } from "react";

import HeaderButton from "./HeaderButton";
import Menu from "./Menu";
import Settings from './Settings'

const Header = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [settingsButton, setSettingsButton] = useState(false);

  const handleMenuButtonChange = (value) => setMenuButton(value);
  const handleSettingsButtonChange = (value) => setSettingsButton(value);

  return (
    <>
      <div className="flex w-full h-12 bg-blue-600 items-center">
        {/* Menu Button */}
        <div className="w-11 h-11 ml-1 hover:bg-blue-700 hover:border hover:border-white flex justify-center items-center">
          <HeaderButton icon="ion:menu" onChange={handleMenuButtonChange} />
        </div>

        <h1 className="ml-5 text-white text-4xl font-roboto font-bold">ToDo</h1>

        {/* Settings Button */}
        <div className="ml-5 w-full h-11 flex justify-end">
          <div className="h-full w-11 mr-1 hover:bg-blue-700 hover:border hover:border-white flex justify-center items-center">
            <HeaderButton
              icon="ion:settings-outline"
              onChange={handleSettingsButtonChange}
            />
          </div>
        </div>
      </div>

      {!menuButton ? <></> : <Menu />}
      {!settingsButton ? <></> : <Settings />}
    </>
  );
};

export default Header;
