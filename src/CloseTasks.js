import React from "react";
import TaskItem from "./TaskItem";

class CloseTasks extends React.Component {
  render() {
    const closeTasks = this.props.tasks.filter(tasks => tasks.done === true);
    let content
    if (closeTasks.length === 0) {
      content = <div className="noTaskLeft noClosed"></div>
    } else {
      content = closeTasks.map((task) => {
        return (
          <TaskItem
            taskdata={task}
            handleTaskToggle={this.props.handleTaskToggle}
            key={task.id} 
          />
        )
      })

    }
    return (<div className="doneContainer" >
      <div className="containerTitle" >
        <h3 >
          Closed
        </h3>
        <div className="taskForm">
          <div type="button" name="taskBox" className="icon add" id="createTask" onClick={this.handleSubmit}>
          </div>
        </div>
      </div>
      <div className="tasks" >
        {content}
      </div>
    </div>
    );
  }
}

export default CloseTasks;
