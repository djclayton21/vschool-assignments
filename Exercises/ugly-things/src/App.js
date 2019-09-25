import React, {Component} from 'react'
import axios from 'axios'
import ShinyList from './components/ShinyList.js'
import ShinyForm from './components/ShinyForm.js'
// https://api.vschool.io/shiny-things/todo

class App extends Component {
    constructor(){
        super()
        this.state = {
            shinyThings: [],
            title: '',
            description: '',
            imgUrl: ''
        }
    }

    componentDidMount(){
        this.getShinyThings()
    }
    getShinyThings = () => {
        axios.get('https://api.vschool.io/shiny-things/todo')
            .then(response => {
                this.setState ({
                    shinyThings: response.data
                })
            })
            .catch(error => console.log(error))
    }
    postShinyThings = (newShiny) => {
        axios.post('https://api.vschool.io/shiny-things/todo', newShiny)
            .then(response => {
                this.setState(prevState => ({
                    shinyThings: [...prevState.shinyThings, response.data],
                    title: '',
                    description: '',
                    imgUrl: ''
                }))
            })
            .catch(error => console.log(error))
    }
    deleteShinyThings = (id) => {
        axios.delete(`https://api.vschool.io/shiny-things/todo/${id}`)
            .then(() => {
                this.setState(prevState => {
                    return {shinyThings: prevState.shinyThings.filter(shiny => shiny._id !== id)}
                })
            })
            .catch(error => console.log(error))
    }
    updateShinyThings = (toUpdate) => {
        this.setState(prevState => {
            console.log(prevState.shinyThings)
            const updatedThings = prevState.shinyThings.map(shiny => {
                if (shiny._id === toUpdate._id) {
                    return toUpdate
                } else {
                    return shiny
                }
            })
            console.log(updatedThings)
            return {shinyThings: updatedThings}
        })
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const newShiny = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }

        this.postShinyThings(newShiny)
    }
    render(){
        return (
            <div className="app">
                <ShinyForm 
                    title = {this.state.title}
                    description = {this.state.description}
                    imgUrl = {this.state.imgUrl}
                    handleChange = {this.handleChange}
                    handleSubmit = {this.handleSubmit}
                />
                <ShinyList 
                    shinyThings = {this.state.shinyThings}
                    deleteShinyThings = {this.deleteShinyThings}
                    updateShinyThings = {this.updateShinyThings}
                />
            </div>
        )
    }
}

export default App