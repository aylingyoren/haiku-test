import { useClipboard, useHover, useMousePosition } from "react-haiku";
import "./App.css";

const header = "Haiku App";

function App() {
  const clipboard = useClipboard({ timeout: 2000 });
  const { hovered, ref } = useHover();
  const { x, y } = useMousePosition();

  return (
    <div className="App">
      <h1>{header}</h1>
      <button
        ref={ref}
        className="App_btn"
        onClick={() => clipboard.copy(header)}
      >
        {clipboard.copied ? "Copied" : hovered ? "Copy me!" : "Copy"}
      </button>
      <h2>Track mouse position</h2>
      <p>
        X: {x} | Y: {y}
      </p>
    </div>
  );
}

export default App;
