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
          <div className="row">
            <div className="col-sm">
              <h3>Import any custom components inside this container, and try them out!</h3>
              {/* Import a component under this comment */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;