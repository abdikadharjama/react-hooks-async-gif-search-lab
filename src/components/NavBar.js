import React from "react";

function NavBar({ color = 'white', title = 'Gif Search App' }) {
  const colors = {
    black: "navbar-dark bg-dark", 
    white: "navbar-light bg-light", 
  };

  return (
    <nav className={`navbar ${colors[color]} mb-4`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </nav>
  );
}

export default NavBar;
