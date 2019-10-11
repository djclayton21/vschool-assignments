import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        axios.get('/todos')
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() { 
        const mappedTodos = this.state.todos.map(todo => <div key= {todo._id}>{todo.name}</div>)
        return ( 
            <div className="app">
                {mappedTodos}
            </div>
         );
    }
}
 
export default App;