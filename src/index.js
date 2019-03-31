import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (<div>{this.state.date.toLocaleTimeString()}</div>)
    }
}

class Toggle extends Component{
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: false
        }
        this.handCLick = this.handCLick.bind(this)
    }

    handCLick(){
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))
    }

    render(){
        return (<button onClick={this.handCLick}>Click / {this.state.isToggleOn? 'on': 'off'}</button>)
    }
}

// ReactDOM.render(<Clock/>, document.getElementById('root'));
// ReactDOM.render(<Toggle/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
