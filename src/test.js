import { useState } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState(0);
  return <ChildComponent count={count} setCount={setCount}></ChildComponent>;
}

export function ChildComponent(props) {
  return (
    <>
      <h1>{props.count}</h1>
      <button onClick={() => props.setCount(props.count + 1)}>
        Increase count
      </button>
    </>
  );
}
