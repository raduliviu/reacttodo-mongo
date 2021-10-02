import React from "react";
import Header from "./Header";
import TasksWrapper from "./TasksWrapper";

class TasksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
    this.handleDarkMode = this.handleDarkMode.bind(this);
  }
  handleDarkMode() {
    const newDarkMode = !this.state.darkMode;
    this.setState({ darkMode: newDarkMode });
    window.localStorage.setItem("darkMode", newDarkMode)
  }

  componentDidMount() {
    let darkModeStorage = (window.localStorage.getItem("darkMode") === "true")
    console.log(darkModeStorage)
      this.setState({ darkMode: darkModeStorage });
  }

  render() {
    let darkMode = "";
    if (this.state.darkMode) {
      darkMode = "darkMode";
    }
    console.log("renderingwithdarkmode " + this.state.darkMode)
    return (
      <div className={darkMode}>
        <Header
          handleDarkMode={this.handleDarkMode}
          checked={this.state.darkMode}
        />
        <TasksWrapper />
      </div>
    );
  }
}
export default TasksApp;
