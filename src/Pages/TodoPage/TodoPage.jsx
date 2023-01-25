import React from 'react';
import CustomInput from "../../Components/CustomInput";
import Task from "../../Components/Task";
import {useSelector} from "react-redux";
import {List, Row, Col} from "antd";

const TodoPage = () => {
    const items = useSelector((state => state.tasks))
    return (
        <>
            <h1>Create your tasks</h1>
            <CustomInput />
            <Row>
                <Col offset={8} span={8}>
                    <List
                        locale={{emptyText: 'No tasks for today'}}
                        dataSource={items}
                        renderItem={(item) => (
                            <Task item={item}
                                  key={item.id}
                                 />
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};

export default TodoPage;
