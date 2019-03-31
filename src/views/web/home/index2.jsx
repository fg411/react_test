import React, {Component} from 'react'
import {render} from 'react-dom'

class GroceryList extends Component{
    state = { userInput: ''}
    // constructor(props) {
    //     super(props)
    //     return {userInput: ''}
    // }
    handleChange(e){
        this.setState({userInput: e.target.value})
    }
    clearAndFocusInput(e) {
        this.setState({userInput: ''}, () => {
            this.refs.theInput.focus()
        })
    }
    render() {
        return (<div>
            <div onClick={this.clearAndFocusInput.bind(this)}>Click to Focus and Reset</div>
            <input ref="theInput" value={this.state.userInput} onChange={this.handleChange.bind(this)}/>
        </div>)
    }
}

export default GroceryList