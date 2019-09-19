import React, {Component} from 'react'
import Die from './Die'

class DiceBox extends Component {
    constructor(){
        super()
        this.state = {
            dice: [
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
            ],
            rollCount: 0
        }
    }
    rollDice = () => {
        const newCount = this.state.rollCount < 3 ? this.state.rollCount + 1 : 0;
        
        if (!newCount){
            this.resetAll()
        } else {const newRoll = this.state.dice.map((die) => {
                let newDie = {};
                newDie.current = !(die.isLocked) ? Math.ceil(Math.random() * 6) : die.current;
                newDie.isLocked = die.isLocked;
                return newDie
            })

            this.setState({
                dice: newRoll,
                rollCount: newCount
        })}
    }
    lockDie = (dieIndex) => {
        console.log(this.state)

        const newRoll = {...this.state}

        newRoll.dice[dieIndex].isLocked = !newRoll.dice[dieIndex].isLocked

        this.setState({newRoll})
    }
    resetAll = () => {
        this.setState({
            dice: [
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
                {current: 0, isLocked: false},
            ],
            rollCount: 0
        })
    }
    render(){
        const buttonText = this.state.rollCount === 3 ? 'Reset' : `Roll: ${this.state.rollCount}`

        return (
            <div className="dice-box">
                {this.state.dice.map((die, i) => {
                    return (
                        <Die 
                            {...die} 
                            rollCount = {this.state.rollCount}
                            index = {i} 
                            key = {i} 
                            lockDie = {this.lockDie}
                    />)
                })}
                <div 
                    className="roll-button" 
                    onClick = {this.rollDice} 
                    style = {{backgroundColor: this.state.rollCount === 3 && 'firebrick' }}
                >
                    {buttonText}
                </div>
            </div>
        )
    }
}

export default DiceBox