import React from "react";
import TaskItem from "./TaskItem";

class CloseTasks extends React.Component {
  render() {
    const closeTasks = this.props.tasks.filter(tasks => tasks.done === true);
    return (
      <div className="doneContainer">
        <div className="containerTitle">
          <h3>Closed</h3></div>
        <div className="tasks">
          <TaskItem 
            dividedTasks={closeTasks} 
            handleTaskToggle={this.props.handleTaskToggle}
          />
        </div>
      </div>
    );
  }
}

export default CloseTasks;
