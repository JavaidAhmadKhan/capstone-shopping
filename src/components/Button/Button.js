/* eslint-disable react/prop-types */
import Spinner from "../Spinner/Spinner";
import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      {...otherProps}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
