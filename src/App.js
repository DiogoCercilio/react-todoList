import React from 'react';
import uuid from 'uuid';
import CONFIG from './constants';

// Pages
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/pages/About'
import axios from 'axios'

// Components
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App'

class App extends React.Component {
  constructor(props) {
  	super(props)
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get(`${CONFIG.API_URL}/todos?_limit=1`)
          .then(res=> this.setState({ todos: res.data }));
  }

  toggleComplete = (itemId) => {
    this.setState({ todos: this.state.todos.map(todo=> {
      if (todo.id === itemId) todo.completed = !todo.completed;
      return todo;
    })});
  }

  onDeleteTodo = (itemId)=> {

    axios.delete(`${CONFIG.API_URL}/todos/${itemId}`)
          .then(res=> {
            this.setState({
              todos: this.state.todos.filter(todo=> todo.id !== itemId) 
            })
          });
  }

  onAddTodo = (title)=> {

    if (!title) return;

    axios.post(`${CONFIG.API_URL}/todos`,{
      title,
      completed: false
    }).then(res=> {
      res.data.id = uuid.v4();
      this.setState({ todos: [...this.state.todos, res.data] })
    });  
  }

  render() {
    
    return (
      <Router>
        <div className='App'>
          <Header/>
          <Route exact path="/" render={props => (
            <div style={pageStyle}>
              <AddTodo onAddTodo={this.onAddTodo} />
              <Todos 
                todos={this.state.todos} 
                toggleComplete={this.toggleComplete}
                onDeleteTodo={this.onDeleteTodo}
              />            
            </div>
           )} 
          />
          <Route path="/about" component={About}/>

        </div>
      </Router>
    )
  }
}

const pageStyle = {
  width: '1000px',
  maxWidth: '100%',
  margin: '0 auto'
};

export default App