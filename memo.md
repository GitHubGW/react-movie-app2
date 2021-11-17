# React Movie App2

### React CDN

```javascript
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