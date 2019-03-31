import React,{Component} from 'react'
import {Table, Divider, Tag, Button} from 'antd'

const { Column, ColumnGroup } = Table;

const columns = [{
    title: 'Name', dataIndex: 'name', key: 'name',
    render: text => <span>{text}</span>,
},
    {title: 'Age', dataIndex: 'age', key: 'age'},
    {title: 'Address', dataIndex: 'address', key: 'address'},
    {title: 'Tags', key: 'tags', dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {color = 'volcano';}
                    return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                })}
              </span>
        ),
    },
    {
        title: 'Action', key: 'action',
        render: (text, record) => (
            <span><span>Invite {record.name}</span>
                <Divider type="vertical"/><Button size="small" type="">Delete</Button>
            </span>
        ),
    }
]

const data = [
    {key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer']},
    {key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser']},
    {key: '3', name: 'Joe Black', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['cool', 'teacher']}]

const datas = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
}];

class tableOne extends Component{
    render(){
        return <div>
            <Table columns={columns} dataSource={data} bordered
                   title={() => 'Header'}
                   footer={() => 'Footer'} />
            <Table dataSource={datas} bordered>
                <ColumnGroup title="name">
                    <Column title="First Name" dataIndex="firstName" key="firstName"/>
                    <Column title="Last Name" dataIndex="lastName" key="lastName"/>
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age"/>
                <Column title="Address" dataIndex="address" key="address"/>
                <Column title="Tags" dataIndex="tags" key="tags"
                    render={tags => (<span>{tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}</span>)}
                />
                <Column title="Action" key="action" render={(text, record) => (
                    <span>Invite {record.lastName}<Divider type="vertical" /><Button size="small">Delete</Button></span>
                )}/>
            </Table>
        </div>
    }
}

export default tableOne