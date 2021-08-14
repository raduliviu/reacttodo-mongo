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
            <div>
            <form onSubmit={this.handleSubmit} className="taskItem">
              <label className="container">
                Are you sure?
              </label>
              <div className="buttons">
              <input type="submit" value="Delete" />
              <button onClick={() => this.props.handleDeleteTask(null)}>
                Cancel
              </button>
              </div>
            </form>
          </div>
        )
    }
}

export default DeleteModal;