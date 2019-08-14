import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    render() {
        const { id, key, title, completed } = this.props.todo;
        return (
            <div>
                <h3 style={this.getStyle(completed)} key={ key }>
                    <input 
                        type="checkbox" 
                        onChange={this.props.toggleComplete.bind(this, id)} 
                        checked={completed}
                    />
                    { title }
                    <button 
                        onClick={this.props.onDeleteTodo.bind(this, id)} 
                        style={btnStyle}
                        title="Click to remove todo item"
                    >X</button>
                </h3>
            </div>
        )
    }

    getStyle(completed) {

        return {
            backgroundColor: '#f4f4f4',
            borderBottom: '1px solid #ccc',
            margin: 0,
            padding: '5px',
            lineHeight: '30px',
            textDecoration: completed ? 'line-through' : 'none'
        };
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
    float: 'right',
    lineHeight: '26px',
    width: '30px',
    display: 'block',
    background: '#a00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
};

export default TodoItem