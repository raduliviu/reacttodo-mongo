import React from "react";

class CloseTasks extends React.Component {
  render() {
    const closeTasks = this.props.tasks.filter(tasks => tasks.done === true);
    return (
      <div className="doneContainer">
        <div className="containerTitle">
        <h3>Closed</h3></div>
        <div className="tasks">
          <ul>
            {closeTasks.map((task, index) => {
                return (
                  <li key={"task"+index}>{task.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default CloseTasks;
