import React from "react";


class OpenTasks extends React.Component {

    render() {
      const openTasks = this.props.tasks.filter(tasks => tasks.done === false);

        return ( <div className = "openContainer" >
            <div className = "containerTitle" >
            <h3 > Open </h3> </div> <div className = "tasks" >
            <ul >
            {openTasks.map((task, index) => {
              return (
                <li key={"task"+index}>{task.title}</li>
              )
            })}

            </ul>

            </div>
            </div>
        );
    }
}

export default OpenTasks;