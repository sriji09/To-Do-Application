import React, { Component } from "react";
import Addtask from './Addtask'

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
    render() {        
        //const {currentTask, tasks} = this.state      
        return (
            <div className="task">                 
                <Addtask onAddTask ={this.handleNewTask}/>
                <h3>TO-DO List</h3>
                {this.state.tasks.length === 0 ? 
                    (<li>Please add tasks</li>) : 
                    (<div>
                        <ul>
                            {this.state.tasks.map((task, index) => (
                                <li key= {index}>{task}</li>
                            ))}
                        </ul>
                    </div>)
                }
            </div>
        )
    }
}

export default Tasks