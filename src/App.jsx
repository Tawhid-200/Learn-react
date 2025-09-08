import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const infos = {
  title: "Welcome to Page",
  links: ["Home", "About", "Contact"],
};

const App = () => {
  return (
    <>
      <Header infos={infos} />
      <Main />
      <Footer />
    </>
  );
};

export default App;
