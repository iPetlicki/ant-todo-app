import React, {useState} from 'react';
import {Input, Row, Col, List, Checkbox } from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const Task = ({item, deleteTask, editTasks, changeStatus}) => {
    const [isEdit, setEdit] = useState(false)
    const [editText, setEditText] = useState(item.title)
    const actions = [<DeleteOutlined onClick={() => deleteTask(item.id)} /> ]
    const handleClick = () => {
        setEdit(!isEdit)
        editTasks(item.id, editText)
    }
    if (isEdit) {
        actions.push(<SaveOutlined onClick={() => handleClick()} /> )
    } else {
        actions.push(<EditOutlined onClick={() => setEdit(!isEdit)} /> )
    }

    return (
            <List.Item actions={actions}>
                <Row>
                    {isEdit ? (
                        <Input
                            onPressEnter={() => handleClick()}
                            onChange={e => setEditText(e.target.value)}
                            value={editText}
                        />
                    ) : (
                        <Col span={8}>
                            <Checkbox checked={item.isDone } onChange={() => changeStatus(item.id)}>
                                {item.isDone ?
                                    (<p style={{textDecoration: 'line-through'}}>{item.title}</p>
                                    ) : (
                                    <p>{item.title}</p>)
                                }
                            </Checkbox>
                        </Col>
                    )}
                </Row>
            </List.Item>
    )
}

export default Task
