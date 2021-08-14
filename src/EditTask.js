import React from "react";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.taskdata.title,
      done: this.props.taskdata.done,
      id: this.props.taskdata.id
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterEdit = this.handleEnterEdit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state);
  }

  handleSubmit() {
    this.props.handleEditTask(this.state);
  }

  handleEnterEdit(event) {
    if(event.key === "Enter"){
        this.handleSubmit(event)
      }
  }

  render() {
    return (
        <div className="taskItem" id={"task" + this.props.taskdata.id}>
        <div className="editWrapper">
            <div>
                <input 
                    type="text"
                    autoFocus 
                    id="editBox" 
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    onKeyPress={this.handleEnterEdit} 
                />
            </div>
        </div>
        <div className="buttons">
            <div 
                onClick={this.handleSubmit}
                className="icon save" 
                type="button">
            </div>
            <div 
                onClick={() => this.props.handleTaskInEdit(null)} 
                className="icon abort" 
                type="button">
            </div>
        </div>
        </div>
    );
  }
}

export default EditTask;
