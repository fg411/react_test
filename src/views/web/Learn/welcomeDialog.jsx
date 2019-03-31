import React, {Component} from 'react'

function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>)
}

function SplitPane(props) {
    return (<div className="SplitPane">
        <div className="SplitPane-left">
            {props.left}
        </div>
        <div className="SplitPane-right">
            {props.right}
        </div>
    </div>)
}

function Contacts () {
    return (<div className="Contacts">Contacts Component</div>)
}

function Chat() {
    return (<div className="Chat">Chat Component</div>)
}

class WelcomeDialog extends Component{
    render(){
        return (<div>
            <FancyBorder color="blue">
                <h1 className="Dialog-tile">
                    Welcome
                </h1>
                <p className="Dialog-massage">
                    Thank you for visiting our spacecraft!
                </p>
            </FancyBorder>
            <SplitPane left={<Contacts />} right={<Chat/>}/>
        </div>)
    }
}
export default WelcomeDialog