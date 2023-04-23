import HeaderButton from "./HeaderButton";

const Header = ({
  onMenuClick,
  onSettingsClick,
  menuButton,
  settingsButton,
}) => {
  return (
    <div className="flex h-12 w-full items-center bg-blue-500">
      {/* Menu Button */}
      <div
        id="hamburger"
        className="ml-1 flex h-11 w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700"
      >
        <HeaderButton
          icon="ion:menu"
          onButtonClick={onMenuClick}
          button={menuButton}
        />
      </div>

      <h1 className="ml-5 font-roboto text-4xl font-bold text-white">DayUp</h1>

      {/* Settings Button */}
      <div className="ml-5 flex h-11 w-full justify-end">
        <div className="mr-1 flex h-full w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700">
          <HeaderButton
            icon="ion:settings-outline"
            onButtonClick={onSettingsClick}
            button={settingsButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
