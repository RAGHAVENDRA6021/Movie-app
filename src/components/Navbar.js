import React from "react";
import './nav.css'
class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div id="box">
          <p id="flashlight">
            <span id="flash">Movie</span>
            <span id="light">Project</span>
          </p>
        </div>
        
      </div>
    );
  }
}
export default Navbar;
