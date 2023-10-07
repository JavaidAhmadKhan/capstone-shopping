import SpinnerPayment from "../SpinnerPayment/SpinnerPayment";
import "./button.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  return (
    <button
      disabled={isLoading}
      {...otherProps}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    >
      {isLoading ? (
        <div className="absolute top-[255px]">
          <SpinnerPayment />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
