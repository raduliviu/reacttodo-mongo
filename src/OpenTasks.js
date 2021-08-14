
import React from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask"


class OpenTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTask: "" };
    this.handleNewTaskInput = this.handleNewTaskInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterNewTask = this.handleEnterNewTask.bind(this);
  }

  handleNewTaskInput(event) {
    this.setState({ newTask: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTask = this.state.newTask
    if (!newTask) {
      return;
    }
    this.props.createTask(this.state.newTask);
    console.log(event.target.value);
    this.setState({ newTask: "" })
  }

  handleEnterNewTask(event){
    if(event.key === "Enter"){
      this.handleSubmit(event)
    }
  }

  render() {
    const openTasks = this.props.tasks.filter(tasks => tasks.done === false);
    let content
    if (openTasks.length === 0) {
      content = <div className="noTaskLeft noOpen"></div>
    } else {
      content = openTasks.map((task) => {
          if (task.id === this.props.taskInEdit) {
            return (
              <EditTask
                taskdata={task}
                handleTaskToggle={this.props.handleTaskToggle}
                handleTaskInEdit={this.props.handleTaskInEdit}
                handleEditTask={this.props.handleEditTask}
                key={task.id}
              />
            )
          }
          return (
            <TaskItem
              taskdata={task}
              handleTaskToggle={this.props.handleTaskToggle}
              handleTaskInEdit={this.props.handleTaskInEdit}
              handleEditTask={this.props.handleEditTask}
              key={task.id}
            />
          )
        }
      )
    }

    return (<div className="openContainer" >
      <div className="containerTitle" >
        <h3 >
          Open
        </h3>
        <div className="taskForm">
          <input type="text" name="taskBox" id="taskBox" value={this.state.newTask} onChange={this.handleNewTaskInput} onKeyPress={this.handleEnterNewTask} />
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

export default OpenTasks;