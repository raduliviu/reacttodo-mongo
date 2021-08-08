import React from "react";


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
            {openTasks.map((task, index) => {
              return (
                <div class="taskItem " key={"task"+index} id={"task"+index}>
                        <label class="container taskCheck">
                            <input type="checkbox" />
                            {task.title}
                            <span class="checkmark"></span>
                        </ label>
                        <div class="buttons">
                            <div type="button" value="Edit" class="icon edit" onClick={"editTask"+index}></div>
                            <div type="button" value="Delete" class="icon delete" onClick={"displayModal" + index}></div>
                    </div>
                </div>
              )
            })
            }

            </div>
            </div>
        );
    }
}

export default OpenTasks;