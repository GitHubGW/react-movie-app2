# React Movie App2

### React CDN

```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.js"></script>

<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

### JSX

```javascript
// JSX를 사용하지 않은 문법
const span = React.createElement("span", { onMouseEnter: () => console.log("onMouseEnter") }, "Hello World");
const button = React.createElement("button", { style: { backgroundColor: "tomato" }, onClick: () => console.log("onClick") }, "Click");
const container = React.createElement("div", null, [span, button]);

// JSX 문법
// JSX 문법을 사용할 때는 babel이 필요하다.
const span = <span onMouseEnter={() => console.log("onMouseEnter")}>Hello</span>;
const button = <button onClick={() => console.log("onClick")}>Click</button>;
```

### React.memo()

- 부모 컴포넌트에서 state값이 바뀌면 부모 컴포넌트 전체가 다시 재실행이 된다.
- 재실행이 되면서 그 과정에서 바뀌지 않은 자식 컴포넌트도 다시 리랜더링되는 문제가 있다.
- 그렇게 되면 어플리케이션의 실행 속도가 느려질 수 있다.
- 그래서 이런 상황에서 React.memo()를 이용해서 props값이 바뀌지 않으면 리랜더링을 하지 않도록 할 수 있다.
- 별개로 memo()와 useMemo()는 비슷하지만 다르다.

```js
const Button = ({ text, handleChangeValue }) => {
  console.log("text", text);

  return (
    <button onClick={handleChangeValue} style={{ backgroundColor: "dodgerblue", color: "white", border: "none", padding: "10px 20px", cursor: "pointer", margin: "10px" }}>
      {text}
    </button>
  );
};

const MemoButton = React.memo(Button);

const App = () => {
  const [value, setValue] = React.useState("Save");

  const handleChangeValue = () => {
    setValue("Revert");
  };

  return (
    <div>
      {console.log("rendered")}
      <h1>App</h1>
      <MemoButton text={value} handleChangeValue={handleChangeValue} />
      <MemoButton text="Confirm" />
    </div>
  );
};
```

### To Do 연습

```js
// App.js
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
```
