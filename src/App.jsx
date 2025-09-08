import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const infos = {
  title: "Welcome to Page",
  links: ["Home", "About", "Contact"],
};

const user = {
  name: "John Doe",
  age: 30,
  email: "I4f9M@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
export const Data = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Data.Provider value={{ user, count }}>
        <Header infos={infos} />
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        <Main />
        <Footer />
      </Data.Provider>
    </>
  );
};

export default App;
