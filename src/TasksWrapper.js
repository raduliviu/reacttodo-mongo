import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {
  render() {
    return (
      <main className="tasksFlex">
      <div className="tasksWrapper">
        <OpenTasks />
        <CloseTasks />
        </div>
        <Stats />
      </main>
    );
  }
}

export default TasksWrapper;
