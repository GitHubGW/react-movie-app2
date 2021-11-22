import PropTypes from "prop-types";
import styles from "./Button.module.css";

console.log("styles", styles.button);

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
