import Button from "./Button";
import ModalButton from "./ModalButton";
import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>App</h1>
      <Button text="Save" />
      <Button text="Delete" />
      <ModalButton text="Modal" />
    </div>
  );
};

export default App;
