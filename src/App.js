import React, {Component} from 'react'
import data from './Components/data'
import './App.css'
import Person from './Components/Person'

class App extends Component {
    constructor(){
        super()
        this.state = {
            data, 
            i:0
        }
    }

    inc=()=>{
        if(this.state.i === this.state.data.length-1){
            this.setState({i:0})
        } else {
            this.setState({i: this.state.i + 1})
        }
    }

    dec=()=>{
        if(this.state.i === 0) {
            this.setState({i: this.state.data.length -1})
        } else {
            this.setState({i: this.state.i - 1})
        }
    }

    render(){
        const {data, i} = this.state
        return(
            <div className="App">
                <Person
                person = {data[i]}
                i={i}
                data ={data}
                inc={this.inc}
                dec={this.dec}/>
            </div>
        )
    }
}

export default App