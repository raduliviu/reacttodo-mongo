import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskInEdit: null,
            tasks: [],
            taskDeleteMode: null
        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleTaskToggle = this.handleTaskToggle.bind(this);
        this.handleTaskInEdit = this.handleTaskInEdit.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleToggleDeleteMode = this.handleToggleDeleteMode.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('https://radu-todo-mongo.herokuapp.com/task')
        if (response) {
            this.setState({tasks: await response.json()})
            console.log(this.state.tasks)
        }
    }

    componentDidUpdate() {
        localStorage.setItem('toDoTasks', JSON.stringify(this.state.tasks))
    }

    handleCreateTask(newTask) {
        let toDoX = {
            value: newTask,
            done: false,
            id: Date.now()
        }
        const tasksUpdate = [...this.state.tasks, toDoX];
        this.setState({ tasks: tasksUpdate });
        console.log(this.state.tasks)
    }

    handleTaskInEdit(id) {
        this.setState({ taskInEdit: id });
    }

    handleEditTask(taskData) {
        const newTasks = this.state.tasks.map((task) => {
          if (task.id !== taskData.id) {
            return task;
          }
          return {
            ...task,
            value: taskData.value,
          };
        });
        this.setState({ tasks: newTasks, taskInEdit: null });
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
                        taskInEdit={this.state.taskInEdit}
                        createTask={this.handleCreateTask}
                        handleTaskToggle={this.handleTaskToggle}
                        handleTaskInEdit={this.handleTaskInEdit}
                        handleEditTask={this.handleEditTask}
                        handleDeleteTask={this.handleDeleteTask}
                        handleToggleDeleteMode={this.handleToggleDeleteMode}
                        taskInDelete={this.state.taskDeleteMode}
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