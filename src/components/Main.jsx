import React, { useState, useEffect, useContext } from "react";
import { Data } from "../App";

const Main = () => {
  const contest = useContext(Data);
  const { name, age, email, address } = contest.user;
  const { street, city, state, zip } = address;
  return (
    <main>
      <h2>Main Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>
        Address: {street}, {city}, {state} {zip}
      </p>
      <p>Count from Context: {contest.count}</p>
    </main>
  );
};

export default Main;
