import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: ['geoge']
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState ((prevState) => {
            return {
                names: [...prevState.names, this.state.name],
                name: ""
            }})
    }

    render(){
        const mappedNames = this.state.names.map((name, i) => <li key = {i}>{name}</li>)
        return (
            <div className="App">
                <form onSubmit = {this.handleSubmit}>
                    <input 
                        type = "text" 
                        name = "name" 
                        value = {this.state.name}
                        onChange= {this.handleChange} 
                        placeholder = "name"/>
                    <button>Submit</button>
                    <h1>{this.state.name}</h1>
                    <ol>
                        {mappedNames}
                    </ol>
                </form>
            </div>
        )
    }
}

export default App