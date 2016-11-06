import React, { Component } from 'react';
import activeComponent from 'react-router-active-component';
import { IndexLink } from 'react-router';

let NavLink = activeComponent('li');

class Nav extends Component {
  render() {
    return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/" className="navbar-brand">Get weather</IndexLink>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
              <NavLink to="/examples">Examples</NavLink>
              <NavLink to="/about">About</NavLink>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="../navbar-fixed-top/">Fixed top</a></li>
          </ul>
        </div>{/*/.nav-collapse */}
      </div>{/*/.container-fluid */}
    </nav>
    );
  }
}

export default Nav;
