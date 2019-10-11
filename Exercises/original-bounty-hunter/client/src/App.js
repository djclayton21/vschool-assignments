import React, { Component } from 'react';
import './style.css';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounties: []
        }
    }

    componentDidMount(){
        axios.get('/bounties')
            .then(res => {
                this.setState({bounties: res.data})
            })
            .catch(err => console.log(err))
    }
    render() { 
        const mappedBounties = this.state.bounties.map(bounty => <div className = 'bounty' key = {`${bounty._id}`} >{`Bounty: ${bounty.firstName} ${bounty.lastName}`}</div>)
        return (
            <div className="app">
                {mappedBounties}
            </div>
        );
    }
}
 
export default App;