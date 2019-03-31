import React, {Component} from 'react'
import {render} from 'react-dom'
import {Switch} from 'antd'
import {Link} from 'react-router-dom'

class MyComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            isToggleOn: false
        }
        this.handleClick  = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render(){
        return (
            <div>
                <h2>北京时间：{this.state.date.toLocaleString()}</h2>
                <Switch checked={this.state.isToggleOn} onChange={this.handleClick} />
                <Link to="/login">Login</Link>
            </div>)
    }
}

export default MyComponent