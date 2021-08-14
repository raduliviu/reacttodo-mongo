import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskDeleteMode: null
        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleTaskToggle = this.handleTaskToggle.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleToggleDeleteMode = this.handleToggleDeleteMode.bind(this);
    }

    componentDidMount() {
        const storedData = localStorage.getItem("toDoTasks")
        if (storedData) {
            this.setState({tasks: JSON.parse(storedData)})
        }
    }

    componentDidUpdate() {
        localStorage.setItem('toDoTasks', JSON.stringify(this.state.tasks))
    }

    handleCreateTask(newTask) {
        let toDoX = {
            title: newTask,
            done: false,
            id: this.state.tasks.length
        }
        const tasksUpdate = [...this.state.tasks, toDoX];
        this.setState({ tasks: tasksUpdate });
        console.log(this.state.tasks)
    }

    handleTaskToggle(id) {
        const newTodos = this.state.tasks.map((todo) => {
            if (todo.id !== id) {
                return todo;
            }

            const newTodosObj = { ...todo, done: !todo.done };
            return newTodosObj;
        });
        this.setState({ tasks: newTodos });
    }

// Handle Delete Stuff

  handleDeleteTask(id) {
    const newTodos = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTodos, taskDeleteMode: null });
  }

  handleToggleDeleteMode(id){
      this.setState({taskDeleteMode: id})
  }


// Handle Delete Stuff

    render() {
        return (
            < main className="tasksFlex" >
                <div className="tasksWrapper" >
                    <OpenTasks
                        tasks={this.state.tasks}
                        taskInDelete={this.state.taskDeleteMode}
                        createTask={this.handleCreateTask}
                        handleTaskToggle={this.handleTaskToggle}
                        handleDeleteTask={this.handleDeleteTask}
                        handleToggleDeleteMode={this.handleToggleDeleteMode}
                    />
                    <CloseTasks
                        tasks={this.state.tasks}
                        taskInDelete={this.state.taskDeleteMode}
                        handleTaskToggle={this.handleTaskToggle}
                        handleDeleteTask={this.handleDeleteTask}
                        handleToggleDeleteMode={this.handleToggleDeleteMode}
                    />
                </div>
                <Stats tasks={this.state.tasks} />
            </main>
        );
    }
}

export default TasksWrapper;