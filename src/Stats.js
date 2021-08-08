import React from "react";

class Stats extends React.Component {
  
  render() {
    const allTasksLength = this.props.tasks.length
    const openTasks = this.props.tasks.filter(task => task.done === false);
    const openTasksLength = openTasks.length;

    return (
      <div className="statsContainer">
        <div className="containerTitle">
          <h3>Stats</h3>
        </div>
        <div className="counters">
          <div className="count">
            <strong>{openTasksLength}</strong> <br /> open Tasks
          </div>
          <div className="count">
            <strong>{allTasksLength-openTasksLength}</strong> <br /> done Tasks
          </div>
          <div className="count">
            <strong>{allTasksLength}</strong> <br /> all Tasks
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
