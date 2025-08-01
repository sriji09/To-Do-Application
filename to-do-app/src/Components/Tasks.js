import React, { Component } from "react";
import Addtask from './Addtask'
import TaskItem from "./TaskItem";

class Tasks extends Component {
    constructor(props) {
        super(props);
        //this.state is always called inside constructure
        this.state = {
            tasks :[]
        } 
    }
    handleNewTask = (newTask) => {
        this.setState(prevState => ({
            tasks : [...prevState.tasks, newTask]
        }));
    };
    handleEditTask = (index, updatedTask) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks[index] = updatedTask;
        this.setState({
            tasks : updatedTasks
        });
    }
    render() {        
        //const {currentTask, tasks} = this.state      
        return (
            <div>                 
                <Addtask onAddTask ={this.handleNewTask}/> 
                <h3>TO-DO List</h3>
                {this.state.tasks.length === 0 ? 
                    (<p>No tasks yet! Start by adding one above.</p>) : 
                    (<ul className="task-list">
                        {this.state.tasks.map((task, index) => (
                            <TaskItem 
                                key ={index}
                                index ={index}
                                task ={task}
                                onEditTask = {this.handleEditTask}
                            />
                        ))}
                    </ul>)
                }
            </div>
        )
    }
}

export default Tasks