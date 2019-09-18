import React from 'react'
import SquareContainer from './SquareContainer.js'
import ControlContainer from './ControlContainer.js'
import './style.css'

class App extends React.Component {
    constructor() {
        super()
        this.state =  {
            colors: ['white', 'white', 'white', 'white'],
            radii: [0, 0, 0, 0]
        }
    }
    button1 = () => {
        let newColors = [...this.state.colors]
        newColors = newColors.map(color => color === 'white' ? 'black' : 'white')
        return( 
            this.setState({
            colors: newColors
        })) 
    }
    button2 = () => {
        let newColors = [...this.state.colors]
        newColors[0] = newColors[0] === 'purple' ? 'white' : 'purple'
        newColors[1] = newColors[1] === 'purple' ? 'white' : 'purple'
        this.setState({
            colors: newColors
        })
    }
    button3 = () => {
        let newColors = [...this.state.colors]
        newColors[2] = newColors[2] === 'blue' ? 'white' : 'blue'
        this.setState ({
            colors: newColors
        })
    }
    button4 = () => {
        let newColors = [...this.state.colors]
        newColors[3] = newColors[3] === 'blue' ? 'white' : 'blue'
        this.setState ({
            colors: newColors
        })
    }
    button5 = () => {
        let newRadii = [...this.state.radii]
        newRadii[0] = newRadii[0] === 50 ? 0 : 50;
        this.setState ({
            radii: newRadii
        })
    }
    button6 = () => {
        let newRadii = [...this.state.radii]
        newRadii[3] = newRadii[3] === 50 ? 0 : 50;
        this.setState ({
            radii: newRadii
        })
    }
    button7 = () => {
        let newRadii = [...this.state.radii]
        newRadii = newRadii.map(radius => radius === 50 ? 0 : 50)
        this.setState ({
            radii: newRadii
        })
    }
    button8 = () => {
        let newColors = [...this.state.colors]
        newColors = newColors.map(color => {
            
            switch (color) {
                case 'white':
                    return 'black'
                case 'black':
                    return 'white'
                case 'purple':
                    return 'gold'
                case 'gold':
                    return 'purple'
                case 'blue':
                    return 'red'
                case 'red':
                    return 'blue' 
            }
        })
        this.setState ({
            colors: newColors
        })
    }
    render () {
        return (
            <div className = 'App'>
                <SquareContainer colors = {this.state.colors} radii = {this.state.radii}/>
                <ControlContainer
                    button1 = {this.button1} 
                    button2 = {this.button2} 
                    button3 = {this.button3} 
                    button4 = {this.button4}
                    button5 = {this.button5}
                    button6 = {this.button6}
                    button7 = {this.button7}
                    button8 = {this.button8}
                />
            </div>
    )}
}
export default App