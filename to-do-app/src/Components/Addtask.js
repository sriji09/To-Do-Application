import React, { useState } from "react";

function Addtask({onAddTask}) {
    const [currentTask, setTask] = useState('');

    const handleTaskChange = (event) => {
        setTask(event.target.value)
    }

    const AddTask = () =>{
        const task = currentTask.trim();
        if(task !== '') {
            onAddTask(task);
            setTask('');
            alert("Task is added Successfully")            
        } else {
            alert("Input field is empty")
        }
    }
    return (
        <div className="input-group">
            <input type="text" 
                className="task-input" 
                placeholder="Please enter to-do task" 
                value={currentTask}
                onChange={handleTaskChange}/>
            <br />
            <button className="add-task-button" onClick={AddTask}>Add Task</button> 
        </div>
    )
}

export default Addtask