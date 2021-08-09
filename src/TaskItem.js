import React from "react";

class TaskItem extends React.Component {
    render() {
        return (
            this.props.dividedTasks.map((task) => {
                return (<div className={"taskItem" + (task.done ? ' done' : '')} key={"task" + task.id} id={"task" + task.id}>
                    <label className="container taskCheck">
                        <input
                            type="checkbox"
                            onChange={
                                () => {
                                    this.props.handleTaskToggle(task.id)
                                    console.log("Toggle for" + task.id)
                                }}
                            defaultChecked={task.done}
                        />
                        {task.title}
                        <span className="checkmark"></span>
                    </ label>
                    <div className="buttons">
                        {
                            task.done ? '' : <div type="button" value="Edit" className="icon edit" ></div>
                        }
                        <div type="button" value="Delete" className="icon delete"  ></div>

                    </div>
                </div>
                )
            })
        )
    }
}

export default TaskItem;