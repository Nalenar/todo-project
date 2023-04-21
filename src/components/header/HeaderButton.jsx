import { Icon } from "@iconify/react";

const HeaderButton = (props) => (
  <div
    className="cursor-pointer"
    onClick={() => {
      props.onButtonClick();
    }}
  >
    {props.button ? (
      <Icon icon="ion:close" color="white" width="30" />
    ) : (
      <Icon icon={props.icon} color="white" width="30" />
    )}
  </div>
);

export default HeaderButton;
