import React from 'react';
import MyPhoto from "../images/image.png"

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MyPhoto} alt="Hi, it`s me" />
        <h1>Yaroslav Plotnickov</h1>
        <p>Front-end Developer</p>
        <ul>
          <li>LinkedIn:</li>
          <li>Github:</li>
          <li>Email:</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;