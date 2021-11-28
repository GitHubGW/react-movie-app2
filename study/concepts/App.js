import { useEffect, useState } from "react";
import styles from "./App.module.css";

const Hello = () => {
  useEffect(() => {
    console.log("Start useEffect");
    return () => console.log("Finish useEffect");
  }, []);

  return <h1>Hello</h1>;
};

const App = () => {
  const [counter, setConter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const handleClick = () => {
    setConter((counter) => counter + 1);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleFormClick = (event) => {
    event.preventDefault();
  };

  const handleShowing = () => {
    setShowing((showing) => !showing);
  };

  useEffect(() => {
    console.log("only one");
  }, []);

  useEffect(() => {
    console.log("counter changed");
  }, [counter]);

  useEffect(() => {
    console.log("keyword changed");
  }, [keyword]);

  useEffect(() => {
    console.log("counter+keyword changed");
  }, [counter, keyword]);

  return (
    <div>
      <div>
        <h1 className={styles.title}>Counter</h1>
        <h3>{counter}</h3>
        <button onClick={handleClick}>Add</button>
      </div>

      <form>
        <h1>Keyword</h1>
        <input type="text" placeholder="Search keyword" value={keyword} onChange={handleInputChange} />
        <button type="submit" onClick={handleFormClick}>
          검색
        </button>
      </form>

      <div>
        <h1>Showing</h1>
        <button onClick={handleShowing}>{showing ? "Hide" : "Show"}</button>
        {showing && <Hello />}
      </div>
    </div>
  );
};

export default App;
