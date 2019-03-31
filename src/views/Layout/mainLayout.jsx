import React,{Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import { Route, Switch, withRouter, Link } from 'react-router-dom'

// import Header from './Header'
// import Section from './Section'
// import Footer from './Footer'

import Index from '../../views/web/home/index'
import DD from '../../views/web/home/index'
import TableOne from '../../views/web/table/tableOne'
import TableTwo from '../../views/web/table/tableTwo'
import LearnOne from '../../views/web/Learn/calculator'
import LearnTwo from '../../views/web/Learn/welcomeDialog'
import LearnThree from '../../views/web/Learn/mouseTracker'
import Icons from '../web/home/icons'
import Avatar from '../web/antd/avatar'
import Timeline from '../web/antd/timeline'

import {menus} from '../../routes'

const {SubMenu} = Menu
const {Header,Content, Sider} = Layout

class MainLayout extends Component{

    constructor(props) {
        super(props)
        this.state = {
            // defaultMenuKeys: [this.props.location.pathname]
        }
    }

    state = {
        collapsed: false,
        isLogin: true
    }

    getSubMenu = menu => {
        let subMenu = []
        menu.map((item, k) => {
            return subMenu.push(<Menu.Item key={k}><span><Link to={item.path}>{item.name}</Link></span></Menu.Item>)
        })
        return subMenu
    }

    getMenu = arr => {
        let menuList = []
        arr.map((v, i) => {
            if(v.children) {
                return menuList.push(<SubMenu key={i} title={<span><Icon type={v.icon === undefined ? 'user': v.icon}/>{v.name}</span>}>
                    {this.getSubMenu(v.children)}
                </SubMenu>)
            } else {
                return menuList.push(
                    <Menu.Item key={i}>
                        <Icon type={v.icon === undefined ? 'desktop' : v.icon} /><span><Link to={v.path}>{v.name}</Link></span>
                    </Menu.Item>)
            }
        })
        return menuList
    }

    handleClick(data){
        console.log(data)
        this.props.history.push(data.path)
    }

    render(){
        return (<Layout className="mainBox">
            <Header className="header"><div className="logo">123</div></Header>
            <Layout>
                {/*<Sider width={200} style={{ background: '#fff', display: this.state.isLogin? "block": "none"}}>*/}
                <Sider width={200} style={{ background: '#fff'}}>
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
                          style={{ height: '100%', borderRight: 0 }}>
                        {this.getMenu(menus)}
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1" onClick={this.handleClick.bind(this)}>option1</Menu.Item>
                            <Menu.Item key="2"><Link to='/index'>7777</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                        <Switch>
                            <Route path="/index" name='Index' component={Index}/>
                            <Route path="/home" name='Home' component={Index}/>
                            <Route path="/dd" name='DD' component={DD} />
                            <Route path="/tableOne" name='tableOne' component={TableOne} />
                            <Route path="/tableTwo" name='tableTwo' component={TableTwo} />
                            <Route path="/dd" name='DD' component={DD} />
                            <Route path="/learnOne" name='LearnOne' component={LearnOne} />
                            <Route path="/learnTwo" name='LearnTwo' component={LearnTwo} />
                            <Route path="/learnThree" name='LearnThree' component={LearnThree} />
                            <Route path="/icon" name='Icon' component={Icons} />
                            <Route path="/avatar" name="Avatar" component={Avatar}/>
                            <Route path="/timeline" name="Timeline" component={Timeline}/>
                            {/*
                                exact根据场景加或者不加
                                这里也可以使用这种方式去验证路由权限
								<Route
                                    exact
                                    path="/ani"
                                    component={props => requireAuth(Ani, props)}
                                />
								 */}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>)
    }
}

export default withRouter(MainLayout)