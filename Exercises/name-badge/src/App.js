import React, {Component} from 'react'
import FormDisplay from './FormDisplay.js'
import BadgeContainer from './BadgeContainer'
import './style.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            form:{
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                food: "",
                bio: "",
            },
            badges: [{
                firstName: "Test",
                lastName: "McTesterson",
                email: "test@test.com",
                birthPlace: "Testville, Testonia",
                phone: "9008675309",
                food: "Rocky Mountain Oyesters",
                bio: "Just a lonely cowboy"
            }]
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(Number(this.state.form.phone))
        if ((this.state.form.phone.length !== 10) || !Number(this.state.form.phone)){
            alert('Phone number should be 10 numeric digits only!')
            return
        }
        const newBadgeData = {...this.state.form}
        this.setState ((prevState) => ({
            form: {
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                food: "",
                bio: ""
            },
            badges: [...prevState.badges, newBadgeData]
        }))
    }
    handleChange = (event) => {
        const newState = {...this.state}
        newState.form[event.target.name]= event.target.value
        this.setState(newState)
    }

    render(){
        return(
            <div className="app">
                <FormDisplay {...this.state.form} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
                <BadgeContainer badges = {this.state.badges}/>
            </div>
        )
    }
}

export default App