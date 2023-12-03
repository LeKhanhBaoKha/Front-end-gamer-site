import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
export default function DemoUseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <h1>Render count: {count.current}</h1>
    </>
  );
}
