import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import './App.css';
import 'antd/dist/antd.css'
// import './style/myTheme.less'
import {routes} from './routes'
import Layout from './views/Layout/mainLayout'

class App extends Component {
    renderRoutes(routes){
        const children = []
        routes.forEach(item => {
            console.log(item)
            children.push(<Route key={item.path} component={item.component} path={item.path} exact />)
        })
        return {children}
    }
    render() {
        // const children = this.renderRoutes(routes)
        const children = []
        routes.forEach(item => {
            children.push(<Route key={item.path} component={item.component} path={item.path} exact />)
        })
        console.log(children)
        return <BrowserRouter>
            <Switch>
                {children}
                <Layout path='/' component={Layout}></Layout>
            </Switch>
            </BrowserRouter>
    }
}

export default App;
