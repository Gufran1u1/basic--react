import PropTypes from "prop-types";
import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};

FoodInput.propTypes = {
  handleKeyDown: PropTypes.func.isRequired,
};

export default FoodInput;
