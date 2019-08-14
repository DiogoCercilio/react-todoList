import React from 'react';

class AddTodo extends React.Component {

    state = {
        title: ''
    }
    
    onChange = (e)=> {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.onAddTodo(this.state.title); 
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    style={addTodoInput} 
                    type="text" 
                    name="title" 
                    placeholder="Insert the todo title here"
                    value={this.state.title}
                    onChange={this.onChange}
                />
                {console.log(this.props.todos)}
                <button style={addTodoSubmit}>
                    Add Todo
                </button>
            </form>
        )
    }
}

const addTodoInput = {
    width: '78%',
    margin: '5px 1%',
    padding: '10px'
};

const addTodoSubmit = {
    width: '15%',
    lineHeight: '30px'
};

export default AddTodo