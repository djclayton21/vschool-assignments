import React, {Component} from 'react'
import axios from 'axios'

class Hit extends Component{
    constructor(){
        super()
        this.state = {
            color: 'ffffff'
        }
    }
    getColor = () => {
        axios.get('http://www.colr.org/json/color/random')
            .then(response => {
                this.setState({color:response.data.colors[0].hex})
            })
            .catch(error => console.log(error))
    }
    componentDidMount(){
        this.getColor()
    }
    render(){
        return (
            <div className="hit" style = {{backgroundColor: `#${this.state.color}`}}>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt="hit" style = {{width: 200}}/>
            </div>
        )
    }  
}
export default Hit