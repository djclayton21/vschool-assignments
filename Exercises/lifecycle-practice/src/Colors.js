import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Colors extends Component {
    constructor(props){
        super(props)        
        this.state = {...this.props}
    }
    changeColor = (event) => {
        if (event.key === 'b') {
            this.setState({bgColor: 'blue'})
        } else if (event.key === 'r'){
            this.setState({bgColor: 'red'})
        }
    }
    componentDidMount(){
        window.addEventListener("keypress", this.changeColor)
    }
    componentDidUpdate(prevProps, prevState){
        console.dir(`Props: ${prevProps.bgColor}`)
        console.dir(`State: ${prevState.bgColor}`)
    }
    componentWillUnmount(){
        window.removeEventListener('keypress', null)
        console.log('removed listener')
    }
    render(){
        return (
            <div className="Colors">
                <Link to = "/">Home</Link>
                <div className="box" style = {{height: 200, width: 200, backgroundColor: this.state.bgColor}}>
                </div>
            </div>
        )
    }
}
export default Colors