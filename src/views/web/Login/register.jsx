import React,{Component} from 'react'
// import Footer from '../../Layout/Footer'
import {Layout} from 'antd'
import Footer from '../../Layout/footer'
import {Form, Input, Tooltip, Icon, Button} from 'antd'

import '../../../style/pages/register.css'
const {Content} = Layout


class register extends Component{
    render(){
        return (<Layout className='register_page'>
            <Content className='register_content'>
                <div className='register_box'>
                    <div className='register_box_img'></div>
                    <div className='register_box_form'>
                        <Form></Form>
                    </div>
                </div>
            </Content>
            <Footer></Footer>
        </Layout>)
    }
}

export default register