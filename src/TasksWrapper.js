import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: "do something",
                    done: false
                },
                {
                    title: "anything",
                    done: false
                },
                {
                    title: "nothing",
                    done: true
                }
              ]

        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
    }

    handleCreateTask() {
      let taskBox = document.getElementById("taskBox");
      let task = taskBox.value;
      let toDoX = {
        title: task,
        done: false
      }
      if (task === null) {
          return;
      } else if (task !== "") {
          this.state.tasks.push(toDoX)
      }
      console.log(this.state.tasks)
      taskBox.value = "";
      this.forceUpdate();
  }

    render() {
        return ( 
        < main className = "tasksFlex" >
            <div className = "tasksWrapper" >
            <OpenTasks tasks={this.state.tasks} createTask={this.handleCreateTask}/>
            <CloseTasks tasks={this.state.tasks} />
            </div> 
            <Stats tasks={this.state.tasks} />
        </main>
        );
    }
}

export default TasksWrapper;