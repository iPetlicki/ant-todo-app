import React, {useState} from 'react';
import { Input, Button, Row, Col } from 'antd';

const CustomInput = ({addTask}) => {
    const [text, setText] = useState('')
    const handleClick = () => {
        addTask(text)
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
