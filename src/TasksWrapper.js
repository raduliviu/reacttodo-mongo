import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {
  render() {
    return (
      <>
        <OpenTasks />
        <CloseTasks />
        <Stats />
      </>
    );
  }
}

export default TasksWrapper;
