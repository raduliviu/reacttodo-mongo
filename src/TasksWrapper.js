import React from "react";
import OpenTasks from "./OpenTasks";
import CloseTasks from "./CloseTasks";
import Stats from "./Stats";

class TasksWrapper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: "do something",
                    done: false,
                    id: 0
                },
                {
                    title: "anything",
                    done: false,
                    id: 1
                },
                {
                    title: "nothing",
                    done: true,
                    id: 2
                },
                {
                    title: "something",
                    done: true,
                    id: 3
                },
                {
                    title: "new one",
                    done: false,
                    id: 4
                }
            ]

        }
        this.handleCreateTask = this.handleCreateTask.bind(this);
        this.handleTaskToggle = this.handleTaskToggle.bind(this);
     //   this.handleDeleteTask = this.handleDeleteTask.bind(this);
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

  //  handleDeleteTask(id){
  //      const newTodos = this.state.tasks.map((todo) => {
  //          if (todo.id !== id){
  //              return todo;
  //          }

  //          if (todo[todo.index].id !== id){
  //              return const indexOfTodo = todo.index
  //          }
            
  //          const newTodosObj = todo.splice(indexOfTodo, 1)
  //      })
  //      toDos = toDos.filter(toDo => toDo)
  //  }

    render() {
        return (
            < main className="tasksFlex" >
                <div className="tasksWrapper" >
                    <OpenTasks
                        tasks={this.state.tasks}
                        createTask={this.handleCreateTask}
                        handleTaskToggle={this.handleTaskToggle}
                        handleDeleteTask={this.handleDeleteTask}
                    />
                    <CloseTasks
                        tasks={this.state.tasks}
                        handleTaskToggle={this.handleTaskToggle}
                    />
                </div>
                <Stats tasks={this.state.tasks} />
            </main>
        );
    }
}

export default TasksWrapper;