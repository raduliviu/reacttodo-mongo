import React from "react";

class CloseTasks extends React.Component {
  render() {
    return (
      <div className="doneContainer">
        <div className="containerTitle">
        <h3>Closed</h3></div>
        <div className="tasks"></div>
      </div>
    );
  }
}

export default CloseTasks;
