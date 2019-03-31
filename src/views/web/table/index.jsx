import React,{Component} from 'react'

function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>)
}

class Table extends Component{
    render(){
        return (<FancyBorder color="blue">
            <h1 className="Dialog-tile">
                Welcome
            </h1>
            <p className="Dialog-massage">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>)
    }
}

export default Table