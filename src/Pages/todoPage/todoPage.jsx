import React, {useState} from 'react';
import CustomInput from "../../Components/CustomInput";
import Task from "../../Components/Task";
import {List, Row, Col} from "antd";

const TodoPage = () => {
    const [tasks, setTasks] = useState([])
    const addTask = (text) => {
        if (text !== '') {
            const newArr = [...tasks, {id: tasks.length + 1, title: text, isDone: false}]
            setTasks(newArr)
        }
        else {
            alert('This field cannot be empty')
        }
    }
    const deleteTask = (id) => {
        const newArr = tasks.filter(item => item.id !== id)
        setTasks(newArr)
    }
    const editTasks = (id, text) => {
        if (text !== '') {
            const newArr = tasks.map(item => item.id === id ? {...item, title: text} : item)
            setTasks(newArr)
        } else {
            alert('This field cannot be empty')
        }
    }
    const changeStatus = (id) => {
        const newArr = tasks.map(item => item.id === id ? {...item, isDone: !item.isDone} : item)
        setTasks(newArr)
    }

    return (
        <>
            <h1>Create your tasks</h1>
            <CustomInput addTask={addTask}/>
            <Row>
                <Col offset={8} span={8}>
                    <List
                        locale={{emptyText: 'No tasks for today'}}
                        dataSource={tasks}
                        renderItem={(item) => (
                            <Task item={item}
                                  key={item.id}
                                  deleteTask={deleteTask}
                                  editTasks={editTasks}
                                  changeStatus={changeStatus}/>
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};

export default TodoPage;
