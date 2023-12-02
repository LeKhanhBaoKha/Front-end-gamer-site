import React, { useState, createContext } from "react";

const MyContext = createContext();

function Parent() {
  const [name, setName] = useState("John");

  return (
    <MyContext.Provider value={name}>
      <button onClick={() => setName("Jane")}>Change Name</button>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const name = useContext(MyContext);

  return <p>Hello, {name}</p>;
}

function ListComponent({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
