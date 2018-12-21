import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">React Components Sandbox</NavbarBrand>
        </Navbar>
        <br/>
        <div className="container">
          Import any custom components inside this container, and try them out!
        </div>
      </div>
    );
  }
}

export default App;