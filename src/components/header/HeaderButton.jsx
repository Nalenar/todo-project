import { Icon } from "@iconify/react";

const HeaderButton = (props) => (
  <div
    className="cursor-pointer"
    onClick={() => {
      props.onButtonClick();
    }}
  >
    {props.button ? (
      <Icon icon="ion:close" color="white" width="45" />
    ) : (
      <Icon icon={props.icon} color="white" width="45" />
    )}
  </div>
);

export default HeaderButton;
