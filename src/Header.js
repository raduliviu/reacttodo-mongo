import React from "react";


class Header extends React.Component {
  render() {
    return (
      <header>
      <h1>Our To-Do-List</h1>

      <div>
          <label htmlFor="darkMode">Dark Mode</label>
          <input className="checkDarkMode" type="checkbox" defaultChecked={this.props.checked} id="darkMode" name="darkMode"  onClick={this.props.handleDarkMode}/>
      </div>
  </header>
    );
  }
}

export default Header;
