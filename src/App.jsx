import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const infos = {
  title: "Welcome to Page",
  links: ["Home", "About", "Contact"],
};

const App = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [SdataFromChild, setSDataFromChild] = useState("");
  function handleDataFromChild(data) {
    setDataFromChild(data);
  }
  function handleDataFromChildRdm(data) {
    setSDataFromChild(data);
  }
  return (
    <>
      <Header infos={infos} />
      <p>{dataFromChild}</p>
      <p>{SdataFromChild}</p>
      <Main
        sendDataToParent={handleDataFromChild}
        sendDataToParentRdm={handleDataFromChildRdm}
      />
      <Footer />
    </>
  );
};

export default App;
