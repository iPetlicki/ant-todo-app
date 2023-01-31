import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteTask, completeTask, changingStatus} from '../Redux/TodoSlicer'
import {Input, Row, Col, List, Checkbox } from 'antd';
import {DeleteOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const Task = ({item}) => {
    const [editText, setEditText] = useState(item.title)
    const dispatch = useDispatch()
    const removeTask = (item) => {
        dispatch(deleteTask(item.id))
    }
    const toggleTask = (item) => {
        dispatch(completeTask(item.id))
    }
    const editTask = (item ,text) => {
        dispatch(changingStatus({id:item.id, editText}))
    }

    const actions = [<DeleteOutlined onClick={() => removeTask(item)} /> ]

    if (item.isChanged) {
        actions.push(<SaveOutlined onClick={() => editTask(item)} />)
    } else {
        actions.push(<EditOutlined onClick={() => editTask(item)} /> )
    }

    return (
            <List.Item actions={actions}>
                <Row>
                    {item.isChanged ? (
                        <Input
                            onPressEnter={() => editTask(item)}
                            onChange={e => setEditText(e.target.value)}
                            value={editText}
                        />
                    ) : (
                        <Col span={8}>
                            <Checkbox checked={item.isDone } onChange={() => toggleTask(item)}>
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
