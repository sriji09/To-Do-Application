import React, {Component} from 'react'

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing : false,
            editedTask: props.task
        }
    }
    handleEditClick = () => {
        this.setState({isEditing: true});
    }

    handleChange = (event) => {
        this.setState({editedTask: event.target.value})
    }

    handleSaveClick = () => {
        this.setState({isEditing: false});
        console.log(this.props.index);
        console.log(this.state.editedTask);
        this.props.onEditTask(this.props.index, this.state.editedTask);
    }
    render() {
        const {key, task} = this.props;
        const {isEditing, editedTask} = this.state;
        return (
            <li key={this.props.index}>
                {isEditing ? (
                    <>
                        <input 
                            className='task-input'
                            type='text'
                            value={editedTask}
                            onChange={this.handleChange}
                        />
                        <button className='saveButton' onClick={this.handleSaveClick}>Save</button>
                    </>
                ): (
                    <>
                        <span className='task-text'>{task}</span>
                        <button className='editButton' onClick={this.handleEditClick}>
                            Edit
                        </button>
                    </>
                )}                
            </li>
        );
    }
}

export default TaskItem