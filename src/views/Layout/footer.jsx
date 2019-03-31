import React, {Component} from 'react'
import {Layout} from 'antd'

import '../../style/layout/footer.css'
const {Footer} = Layout


class FooterBox extends Component{
    render(){
        return (<Footer className='Footer_Box'>
            <div dangerouslySetInnerHTML={{__html: 'cc &copy; 2019'}} />
        </Footer>)
    }
}

export default FooterBox