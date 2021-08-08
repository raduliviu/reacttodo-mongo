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
          <ul>
            {closeTasks.map((task, index) => {
              return (
                <div class="taskItem done" key={"task" + index} id={"task" + index}>
                  <label class="container taskCheck">
                    <input type="checkbox" checked/>
                    {task.title}
                    <span class="checkmark"></span>
                  </ label>
                  <div class="buttons">
                    <div type="button" value="Delete" class="icon delete" onClick={"displayModal" + index}></div>
                  </div>
                </div>
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
