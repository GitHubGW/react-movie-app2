import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((toDos) => [...toDos, toDo]);
    setToDo("");
  };

  const handleChange = (event) => {
    setToDo(event.target.value);
  };

  return (
    <div>
      <h1>To Do ({toDos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input value={toDo} onChange={handleChange} type="text" placeholder="Write to do" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
