import logo from "./logo.svg";
import "./App.css";
import React from "react";
import airbnb from './Images/download.jpg'

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // const button = React.createElement('button', {
  //   className: 'btn'
  // }, 'Clicke me');

  // const div = React.createElement('div', {},
  //   [
  //     React.createElement('p', {}, "asdfghjklasdfghjkasdfghjk"),
  //     React.createElement('button', {}, "Read More")
  //   ]
  // );

  // return div;

  return (
    <>
      <div className="div">
        <p>qwertyuioasdfghjk</p>
        <button>Read more</button>
      </div>
      <div className="img">
        <img src={airbnb}/>
      </div>
    </>
  );
}

export default App;
