import React from "react";

class DeleteModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {visible: false};
        this.ToggleDisplayModal = this.ToggleDisplayModal.bind(this);
    }

    ToggleDisplayModal(modal){
        this.setState({visible: !this.state.visible})
    }

    render() {
        return (
        <div>
            
            <div id="deleteTaskModal" className="modal">
            <span  className="close" title="Close Modal">×</span>
            <div className="modalContent">
                <h1>Are you sure you want to delete this task?</h1>
                <button className="cancelbtn" onClick="closeModal()">Cancel</button>
                <button className="confirmbtn" id="confirm" onClick={this.ToggleDisplayModal}>Confirm</button>
            </div>
        </div>
        </div>

        )
    }
}

export default DeleteModal;