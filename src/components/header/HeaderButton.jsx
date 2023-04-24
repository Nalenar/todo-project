import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../redux/styleSlice";

const HeaderButton = ({ icon, buttonName, buttonState }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName, buttonState) => {
    dispatch(toggleWindows({ window: buttonName, toggle: !buttonState }));

    if (!buttonState) {
      dispatch(toggleStyles({ style: "blur", string: "blur-md" }));
    } else {
      dispatch(toggleStyles({ style: "blur", string: "" }));
    }
  };

  return (
    <div
      className="cursor-pointer"
      onClick={() => handleButtonClick(buttonName, buttonState)}
    >
      {buttonState ? (
        <Icon icon="ion:close" color="white" width="30" />
      ) : (
        <Icon icon={icon} color="white" width="30" />
      )}
    </div>
  );
};

export default HeaderButton;
