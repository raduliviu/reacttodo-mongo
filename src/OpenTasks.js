import React from "react";

class OpenTasks extends React.Component {
  render() {
    return (
      <div className="openContainer">
        <div className="containerTitle">
          <h3>Open</h3>
        </div>
        <div className="tasks"></div>
      </div>
    );
  }
}

export default OpenTasks;
