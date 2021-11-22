import { useEffect, useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [counter, setConter] = useState(0);

  const handleClick = () => {
    setConter((counter) => counter + 1);
  };
  console.log("render");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h1 className={styles.title}>App</h1>
      <h3>{counter}</h3>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default App;
