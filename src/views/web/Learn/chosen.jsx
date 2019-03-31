import React,{Component} from 'react'

class Chosen extends Component{
    componentDidMount(){
        this.$el = $(this.el)
    }
    render(){
        return (<div>
            <select className="Chosen-select" ref={el => this.el = el}>
            {this.props.children}
            </select>
        </div>)
    }
}
