import React from "react";

class DeleteModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.currentTaskTitle,
            id: this.props.currentTaskId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(`title: ${this.state.title}`);
        this.props.handleDeleteTask(this.state.id);
      }


    render() {
        return (
            <div className="taskItem">
            <form onSubmit={this.handleSubmit} >
              <label className="container">
                Are you sure?
              </label>
              <div className="buttons">
              <input className="icon" type="submit" value="Delete" />
              <div onClick={() => this.props.handleDeleteTask(null)} className="icon abort">
              </div>
              </div>
            </form>
          </div>
        )
    }
}

export default DeleteModal;