import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import '../../../style/pages/login.css'

class Login extends Component{
    handleSubmit = (e) => {
        this.props.history.push('/')
    }
    render(){
        return (<div className="content-inner-wrapper home login_page">
            <div className="login_box">
                <Form onSubmit={this.handleSubmit} className="login_form">
                    <Form.Item>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>记住我</Checkbox>
                        <span className="login-form-forgot">忘记密码</span>
                        <Button type="primary" className="login-form-button" htmlType="submit">登录</Button>
                        <Link to='/register'>注册账号？</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>)
    }
}

export default Login
