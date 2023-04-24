import HeaderButton from "./HeaderButton";

const Header = ({ menu, settings }) => (
  <div className="flex h-12 w-full items-center bg-blue-500">
    {/* START Menu Button */}
    <div className="ml-1 flex h-11 w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700">
      <HeaderButton icon="line-md:menu" buttonName="menu" buttonState={menu} />
    </div>
    {/* END Menu Button */}

    <h1 className="ml-5 font-roboto text-4xl font-bold text-white">DayUp</h1>

    {/* START Settings Button */}
    <div className="ml-5 flex h-11 w-full justify-end">
      <div className="mr-1 flex h-full w-11 items-center justify-center hover:border hover:border-white hover:bg-blue-700">
        <HeaderButton
          icon="ion:settings-outline"
          buttonName="settings"
          buttonState={settings}
        />
      </div>
    </div>
    {/* END Settings Button */}
  </div>
);

export default Header;
