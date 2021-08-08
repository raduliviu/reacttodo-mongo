import React from "react";
import TaskItem from "./TaskItem";


class OpenTasks extends React.Component {

    render() {
      const openTasks = this.props.tasks.filter(tasks => tasks.done === false);

        return ( <div className = "openContainer" >
            <div className = "containerTitle" >
              <h3 > 
                Open 
              </h3> 
              <div class="taskForm">
                <input type="text" id="taskBox" />
                <div type="button" class="icon add" id="createTask" onClick={this.props.createTask}>
                </div>
              </div> 
            </div> 
            <div className = "tasks" >
            <TaskItem dividedTasks={openTasks} />

            </div>
            </div>
        );
    }
}

export default OpenTasks;