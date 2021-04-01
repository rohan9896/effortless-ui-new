import React from "react";
import "./App.css";
import "./Components/Buttons";
import Header from "./Components/Header";
import DesktopList from "./Components/DesktopList";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DocsHeader from "./Components/DocsHeader";
import DocsContent from "./Components/DocsContent";
import MobileList from "./Components/MobileList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <DocsHeader />
            <DocsContent />
            <Footer />
          </Route>
          <Route path="/componentslist">
            <MobileList />
            <DesktopList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
