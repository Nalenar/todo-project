import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";

import { toggleWindows, toggleStyles } from "../../../redux/commonSlice";

const HeaderButton = ({ icon, buttonName, buttonState }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(toggleWindows({ window: buttonName, toggle: !buttonState }));

    if (!buttonState) {
      dispatch(toggleStyles({ style: "blur", string: "blur-md" }));
    } else {
      dispatch(toggleStyles({ style: "blur", string: "" }));
    }
  };

  return (
    <button onClick={handleButtonClick}>
      {buttonState ? (
        <Icon icon="ion:close" color="white" width="30" />
      ) : (
        <Icon icon={icon} color="white" width="30" />
      )}
    </button>
  );
};

export default HeaderButton;
