import React, {Component} from 'react'
import {Row, Col, Card, Avatar, Switch, Icon, Skeleton} from 'antd'

const {Meta} = Card
class GroceryList extends Component{
    state = { loading: true}

    componentDidMount(){
        console.log(1)
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    onChange = (checked) => {
        this.setState({loading: !checked})
    }

    render() {
        const {loading} = this.state
        return (<div style={{ background: '#ECECEC', padding: '10px' }}>
            <Switch checked={!loading} onChange={this.onChange} />

            <Row gutter={24} type="flex" justify="space-around">
                <Col span={11}>
                    <Card style={{ width: 300, marginTop: 15 }} loading={loading}>
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col span={11}>
                    <Card
                        style={{ width: 300, marginTop: 15 }} loading={loading}
                        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                    >
                        <Skeleton loading={loading} avatar active>
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                            />
                        </Skeleton>
                    </Card>
                </Col>
            </Row>

        </div>)
    }
}

export default GroceryList