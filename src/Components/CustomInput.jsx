import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { Input, Button, Row, Col } from 'antd';
import {addTask} from '../Redux/TodoSlicer'

const CustomInput = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const handleAdd = (text) => {
        dispatch(addTask(text))
    }

    const handleClick = () => {
        handleAdd(text)
        setText('')
    }

    return (
        <div>
            <Row>
                <Col span={5} offset={9}>
                    <Input onPressEnter={() => handleClick()} onChange={(e => setText(e.target.value))} value={text}  placeholder="Enter a task" />
                </Col>
                <Col span={1}>
                    <Button onClick={() => handleClick()} type="primary">Add task</Button>
                </Col>
            </Row>
        </div>
    );
};

export default CustomInput;
