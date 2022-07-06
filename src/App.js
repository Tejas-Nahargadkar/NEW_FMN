import React from "react";
import "./App.css";
import JobSeekerdashboard from "./components/JOBSeek/JobSeekerdashboard";
import PETpage from "./components/PETpage/PETpage";
import TestPage from "./components/TestPage/TestPage";

function App() {
  return (
    <div className="App">
      <PETpage />
      <TestPage/>
    </div>
  );
}

export default App;
