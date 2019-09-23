import React, {Component} from 'react'
import axios from 'axios'
import Hit from './Hit.js'


class HitList extends Component {
    constructor() {
        super()
        this.state = {
            hits: [],
        }
    }
    getHits = () => {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
            .then(response => {
                this.setState({hits: response.data})
            })
            .catch(error => console.log(error))
    }

    
    componentDidMount(){
        this.getHits()
    }
    render(){
        return (
            <div className='hit-list'>
                {this.state.hits.map((hit, i) => <Hit {...hit} key= {i}/>)}
            </div>
        )
    }
}
export default HitList