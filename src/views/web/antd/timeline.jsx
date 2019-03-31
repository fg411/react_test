import React,{Component} from 'react'
import {Timeline, Icon, Divider, BackTop} from 'antd'

class TimelineTest extends Component{
    render(){
        return (<>
            <Divider>Timeline + BackTop</Divider>
            <Timeline mode="alternate">
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Timeline.Item>
                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
            </Timeline>
            <Divider>再來一個 TimeLine</Divider>
            <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Solve initial network problems 1</p>
                    <p>Solve initial network problems 2</p>
                    <p>Solve initial network problems 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item>
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3 2015-09-01</p>
                </Timeline.Item>
            </Timeline>
            <Divider></Divider>
            <BackTop visibilityHeight={150}>
                {/*<div className="ant-back-top-inner">UP</div>*/}
            </BackTop>
            </>)
    }
}

export default TimelineTest