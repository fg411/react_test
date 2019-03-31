import Login from '../views/web/Login/login'
import Register from '../views/web/Login/register'
import Home from '../views/web/home/index'
import Layout from '../views/Layout/mainLayout'
import Table from './table'
import Icon from '../views/web/home/icons'

const Learn = [
    {path: '/learnOne', name: 'LearnOne'},
    {path: '/learnTwo', name: 'LearnTwo'},
    {path: '/learnThree', name: 'LearnThree'}
]

const AntComponent = [
    {path: '/avatar', name: 'Avatar'},
    {path: '/timeline', name: 'Timeline'}
]

const menus = [
    {path: '/home', name: '企金首页', component: Home},
    {path: '/table', name: '表格', children: Table, icon: 'table'},
    {path: '/learn', name: 'Learn', children: Learn},
    {path: '/icon', name: 'Icon', component: Icon, icon: 'appstore'},
    {path: '/component', name: 'Ant Component', children: AntComponent}
]

const routes = [
    {path: '/', name: 'Index', component: Layout, children: menus},
    {path: '/about', name: 'About'},
    {path: '/login', name: 'Login', component: Login},
    {path: '/register', name: 'Register', component: Register}
]

export {routes, menus}