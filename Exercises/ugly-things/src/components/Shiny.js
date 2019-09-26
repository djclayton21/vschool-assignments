import React, {Component} from 'react'
import axios from 'axios'
class Shiny extends Component {
    constructor(props){
        super(props)
        this.state = {
            editTitle: this.props.title,
            editDescription: this.props.description,
            editImgUrl: this.props.imgUrl,
            isOpen: false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    editShinyThings = (event, id) => {
        event.preventDefault()

        const editedShiny = {
            title: this.state.editTitle,
            description: this.state.editDescription,
            imgUrl: this.state.editImgUrl
        }

        axios.put(`https://api.vschool.io/shiny-things/todo/${id}`, editedShiny)
            .then(response => {
                this.setState({isOpen: false})
                this.props.updateShinyThings(response.data)
            })
            .catch(error => console.log(error))
    }

    openDialog = () => {this.setState({isOpen: true})}

    render(){
        return (
            <div className="shiny" style = {{border: '1px solid blue'}}>
                <div>{this.props.title}</div>
                <img src={this.props.imgUrl} alt={this.props.title} width= {200}/>
                <div>{this.props.description}</div>
                <button onClick={() => this.props.deleteShinyThings(this.props._id)}>Delete</button>
                <button onClick={() => {this.setState({isOpen: true})}}>Edit</button>
                <dialog open = {this.state.isOpen}>

                    //this could have been the same component used for post
                    <form method ='dialog' onSubmit= {(event) => this.editShinyThings(event, this.props._id)}>
                        <input 
                            name = "editTitle"
                            value = {this.state.editTitle}
                            onChange= {this.handleChange}
                            type="text"
                            placeholder="Title"/>
                        <input 
                            name = "editDescription"
                            value = {this.state.editDescription}
                            onChange= {this.handleChange}
                            type="text"
                            placeholder="Description"/>
                        <input 
                            name = "editImgUrl"
                            value = {this.state.editImgUrl}
                            onChange= {this.handleChange}
                            type="text"
                            placeholder="Image URL"/>
                        <button>Submit</button>
                    </form> 
                </dialog>
            </div>
        )
    }
}
export default Shiny