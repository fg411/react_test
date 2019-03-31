import React,{Component} from 'react'
import {Icon, Button} from 'antd'

class Cat extends Component{
    render(){
        const mouse = this.props.mouse
        return (<Button  icon={'add'} style={{position: 'absolute', left: mouse.x, top: mouse.y}}>{mouse.x},{mouse.y}</Button>)
    }
}


class MouseWithCat extends Component{
    constructor(props){
        super(props)
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {x:0, y: 0}
    }
    handleMouseMove(e){
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    render(){
        return (<div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
            <Cat mouse={this.state}/>
        </div>)
    }

}
class MouseTracker extends Component{
    render(){
        return (<div><h1>Move the mouse around!</h1><MouseWithCat/></div>)
    }

}

export default MouseTracker