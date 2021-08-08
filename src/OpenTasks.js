import React from "react";
import TaskItem from "./TaskItem";


class OpenTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {newTask: ""};
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewTaskInput(event){
this.setState({newTask: event.target.value})
  }

handleSubmit(event){
  event.preventDefault();
  const newTask = event.target.value
  if (!newTask) {
    return;
}
  this.props.createTask(this.state.newTask);
}

    render() {
      const openTasks = this.props.tasks.filter(tasks => tasks.done === false);
      let content
      if (openTasks.length === 0){
      content = <div className="noTaskLeft noOpen"></div>
      } else {
        content = <TaskItem dividedTasks={openTasks} />

      }

        return ( <div className = "openContainer" >
            <div className = "containerTitle" >
              <h3 > 
                Open 
              </h3> 
              <div className="taskForm">
                <input type="text" id="taskBox" onChange={this.handleNewTaskInput} />
                <div type="button" className="icon add" id="createTask" onClick={this.handleSubmit}>
                </div>
              </div> 
            </div> 
            <div className = "tasks" >
            {content}
            </div>
            </div>
        );
    }
}

export default OpenTasks;