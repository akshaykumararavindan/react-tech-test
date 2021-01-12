import "./App.css";
import React, { createContext, useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MemeDetails from "./components/MemeDetails";
import Meme from "./pages/Meme";

export const PropContext = createContext(null);
function App() {
  const [object, setObject] = useState({});
  const objectValue = useMemo(() => ({ object, setObject }), [
    object,
    setObject,
  ]);
  return (
    <div className="App">
      <PropContext.Provider value={objectValue}>
        <Router>
          <Switch>
            <Route path="/" component={Meme} exact />
            <Route path="/details" component={MemeDetails} exact />
          </Switch>
        </Router>
      </PropContext.Provider>
    </div>
  );
}

export default App;
