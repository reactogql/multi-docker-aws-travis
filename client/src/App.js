import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fibs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/otherpage">Other Page</Link>
          </li>
        </ul>
      </header>
      <Route exact path="/" component={Fib} />
      <Route path="/otherpage" component={OtherPage} />
    </div>
  );
}

export default App;
