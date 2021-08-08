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
    }
    render() {
        return ( 
        < main className = "tasksFlex" >
            <div className = "tasksWrapper" >
            <OpenTasks tasks={this.state.tasks} />
            <CloseTasks tasks={this.state.tasks} />
            </div> 
            <Stats tasks={this.state.tasks} />
        </main>
        );
    }
}

export default TasksWrapper;