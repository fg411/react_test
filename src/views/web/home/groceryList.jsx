import React, {Component} from 'react'
import {render} from 'react-dom'

class GroceryList extends Component {
    handClick(i) {
        console.log('you click:' + this.props.items[i])
    }

    render(){
      return (<div>{this.props.items.map((item, i) => {
        return (<div onClick={this.handClick.bind(this, i)} key={i}>{item}</div>)
      })}</div>)
    }
}

export default GroceryList