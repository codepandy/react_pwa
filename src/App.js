import React from "react";
import logo from "./logo.svg";
import "./App.css";

function onClickApi() {
  fetch("/api/getlist")
    .then(response => {
      return response;
    })
    .then(data => {
      alert(JSON.stringify(data));
    });
}

function onClickRemote() {
  fetch("/remote/getName")
    .then(response => {
      return response.json();
    })
    .then(data => {
      alert(JSON.stringify(data));
    });
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onClickApi}>api</button>
        <button onClick={onClickRemote}>remote</button>
      </header>
    </div>
  );
}

export default App;
