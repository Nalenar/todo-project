import { useState } from "react";
import { Icon } from "@iconify/react";

const HeaderButton = ({ onChange, icon }) => {
  const [toggle, setToggle] = useState(false);

  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setToggle((prev) => !prev);
      }}
      onChange={handleChange(toggle)}
    >
      {toggle ? (
        <Icon icon="ion:close" color="white" width="45" />
      ) : (
        <Icon icon={icon} color="white" width="45" />
      )}
    </div>
  );
};

export default HeaderButton;
