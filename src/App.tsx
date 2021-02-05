import React from "react";
import "./App.scss";

//Childrens
import Home from "./views/Home";
import About from "./views/About";
import Recipes from "./views/Recipes";

import { Switch, Route } from "react-router-dom";
import TheNavigation from "./components/TheNavigation";

function App() {
  return (
    <div className="App ">
      <header className="header">
        <nav>
          <TheNavigation />
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/recipes" component={Recipes}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
