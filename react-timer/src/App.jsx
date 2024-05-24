import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainScreen from "./Components/MainScreen";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="h-[100vh]">
        <Header />
        <MainScreen />
      </div>
    </>
  );
}

export default App;
