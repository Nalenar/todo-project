import { useState } from "react";
import { Icon } from "@iconify/react";

const HeaderButton = (props) => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        // setToggle((prev) => !prev);
        props.onButtonClick()
      }}
    >
      {props.button ? (
        <Icon icon="ion:close" color="white" width="45" />
      ) : (
        <Icon icon={props.icon} color="white" width="45" />
      )}
    </div>
  );
};

export default HeaderButton;
