import React from "react";

class Header extends React.Component {
  render() {
    console.log("renderingheader " + this.props.checked);
    return (
      <header>
        <h1>Our To-Do-List</h1>

        <div>
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            className="checkDarkMode"
            type="checkbox"
            checked={this.props.checked}
            id="darkMode"
            name="darkMode"
            onChange={this.props.handleDarkMode}
          />
        </div>
      </header>
    );
  }
}

export default Header;
