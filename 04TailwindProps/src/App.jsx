import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObject = {
    "username":"nayan"
  }

  let newArr = [1,2,3]

  //we can pass values from one component to other component
  // <Card name="Nayan" object = {myObject} arr = {newArr}/>
  return (
    <>
      <Card username="Nayan"/>
      <Card/>
    </>
  );
}

export default App;