import React from "react";
import Header from "./Header";
import TasksWrapper from "./TasksWrapper";

class TasksApp extends React.Component {
    render() {
      return (
            <div className="darkMode">
              <Header />
              <TasksWrapper />
            </div>
          );
    
    }
}
export default TasksApp;

