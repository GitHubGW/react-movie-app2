import PropTypes from "prop-types";
import styles from "./ModalButton.module.css";

const ModalButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ModalButton;
