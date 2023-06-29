import React from "react";
import logo from "./logo.svg";
import "./App.css";

/* Roboto Fonts */
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/* Components */
import Header from "./components/Header";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />  
    </div>
  );
}

export default App;
