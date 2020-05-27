import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Projects from "./components/Projects";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/projects"><Projects /></Route>
        <Route path="/"><About /></Route>
      </Switch>
    </div>
  );
}

export default App;
