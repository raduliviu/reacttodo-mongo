import React from "react";

class TaskItem extends React.Component {
    render() {
        return(
        this.props.dividedTasks.map((task, index) => {
        return (<div className="taskItem " key={"task" + index} id={"task" + index}>
                <label className="container taskCheck">
                    <input type="checkbox" />
                    {task.title}
                    <span className="checkmark"></span>
                </ label>
                <div className="buttons">
                    <div type="button" value="Edit" className="icon edit" ></div>
                    <div type="button" value="Delete" className="icon delete" ></div>

                </div>
            </div>
        )})
        )}
}

export default TaskItem;