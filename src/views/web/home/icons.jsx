import React,{Component} from 'react'
import {Card, Icon} from 'antd'
const gridStyle = {
    width: '10%',
    textAlign: 'center'
}

class Icons extends Component{
    render(){
        return(
            <>
                <Card title="方向性图标">
                    <Card.Grid style={gridStyle}><Icon type="step-backward"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="step-forward"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="fast-backward"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="fast-forward"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="down"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="up"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="left"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="right"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="play-circle" theme="twoTone"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="login"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="logout"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="fullscreen"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="fullscreen-exit"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="retweet"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="swap"/></Card.Grid>
                </Card>
                <Card title="提示建议性图标">
                    <Card.Grid style={gridStyle}><Icon type="question-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="plus-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="pause-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="minus-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="info-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="close-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="warning"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="check-circle"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="stop" theme="twoTone"/></Card.Grid>
                </Card>
                <Card title="编辑类图标">
                    <Card.Grid style={gridStyle}><Icon type="edit"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="form"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="copy"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="scissor"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="delete"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="bold"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="redo"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="sort-ascending"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="drag"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="ordered-list"/></Card.Grid>
                </Card>
                <Card title="数据类图标">
                    <Card.Grid style={gridStyle}><Icon type="area-chart"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="pie-chart"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="bar-chart"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="line-chart"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="radar-chart"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="rise"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="stock"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="fund"/></Card.Grid>
                </Card>
                <Card title="网站通用图标">
                    <Card.Grid style={gridStyle}><Icon type="lock"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="cloud"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="code"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="delete"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="download"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="file"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="file-pdf"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="file-jpg"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="file-add"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="folder"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="mail"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="mobile"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="setting"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="user"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="environment"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="wifi"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="api"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="sync" spin/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="tool"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="robot"/></Card.Grid>
                </Card>
                <Card title="品牌和标识">
                    <Card.Grid style={gridStyle}><Icon type="android"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="apple"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="windows"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="ie"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="chrome"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="github"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="weibo"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="qq"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="twitter"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="wechat"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="alipay"/></Card.Grid>
                    <Card.Grid style={gridStyle}><Icon type="html5"/></Card.Grid>
                </Card>
            </>)
    }
}

export default Icons