import React from "react";
import DeleteModal from "./DeleteModal"

class TaskItem extends React.Component {
    render() {
        let taskItem
        if (this.props.taskdata.id === this.props.taskDeleteMode) {
           taskItem = <DeleteModal
                            handleDeleteTask={this.props.handleDeleteTask}
                            currentTaskId={this.props.taskdata.id}
                            currentTaskTitle={this.props.taskdata.value}
                            key={this.props.taskdata.id}
                            handleToggleDeleteMode={this.props.handleToggleDeleteMode}
                        />
                }

            else {
            taskItem = <div className={"taskItem" + (this.props.taskdata.done ? ' done' : '')} key={"task" + this.props.taskdata.id} id={"task" + this.props.taskdata.id}>
                <label className="container taskCheck">
                    <input
                        type="checkbox"
                        onChange={
                            () => {
                                this.props.handleTaskToggle(this.props.taskdata.id)
                                console.log("Toggle for" + this.props.taskdata.id)
                            }}
                        defaultChecked={this.props.taskdata.done}
                    />
                    {this.props.taskdata.value}
                    <span className="checkmark"></span>
                </ label>
                <div className="buttons">
                    {
                        this.props.taskdata.done ? '' : <div
                            type="button"
                            value="Edit"
                            className="icon edit"
                            onClick={() => this.props.handleTaskInEdit(this.props.taskdata.id)}>
                        </div>
                    }
                    <div type="button" value="Delete" className="icon delete" onClick={() => {
                        this.props.handleToggleDeleteMode(this.props.taskdata.id)
                        console.log(this.props.taskdata.id)
                        console.log(this.props.taskDeleteMode)
                    }} ></div>
                </div>
            </div>
             }
        return taskItem

    }
}

export default TaskItem;