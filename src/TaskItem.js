import React from "react";

class TaskItem extends React.Component {
    render() {
        return (
            <div className={"taskItem" + (this.props.taskdata.done ? ' done' : '')} key={"task" + this.props.taskdata.id} id={"task" + this.props.taskdata.id}>
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
                    {this.props.taskdata.title}
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
                    <div type="button" value="Delete" className="icon delete"  ></div>
                </div>
            </div>
        )
    }
}

export default TaskItem;