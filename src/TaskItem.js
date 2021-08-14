import React from "react";
import DeleteModal from "./DeleteModal"

class TaskItem extends React.Component {
    constructor(props){
        super(props);
    }
    
    

    render() {
        return (
            
            this.props.dividedTasks.map((task) => {
                if(task.id == this.props.taskDeleteMode ){
                    return <DeleteModal 
                    handleDeleteTask={this.props.handleDeleteTask}
                    currentTaskId={task.id}
                    currentTaskTitle={task.title}
                    key={task.id}
                    handleToggleDeleteMode={this.props.handleToggleDeleteMode}
                    />
                } 
                
                else {
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
                         <div type="button" value="Delete" className="icon delete" onClick={() => {
                             this.props.handleToggleDeleteMode(task.id)
                             console.log(task.id)
                             console.log(this.props.taskDeleteMode)
                             }} ></div>
                        
                    </div>
                </div>
                )}
            })
        )
    }
}

export default TaskItem;