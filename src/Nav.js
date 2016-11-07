import React, { Component } from 'react';
import activeComponent from 'react-router-active-component';
import { IndexLink } from 'react-router';

let NavLink = activeComponent('li');

class Nav extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  onSearch(e) {
    e.preventDefault();

    let location = this.refs.location.value.trim();
    let encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.location.value = '';
      this.context.router.push(`/?location=${encodedLocation}`);
    }
  }

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
          <div className="nav navbar-nav navbar-right">
              <form onSubmit={this.onSearch.bind(this)}>
                <div className="form-group">
                  <input
                    ref="location"
                    type="search"
                    className="form-control"
                    placeholder="Search weather"/>
                  <button className="btn btn-default">Search</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </nav>
    );
  }
}

export default Nav;
