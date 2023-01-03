import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";


const LoginPage = () => {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 2000);
    };

    const navigate = useNavigate()
    const onFinish = async (values) => {
        enterLoading(1)
        const logUser = {
            email: values.username,
            password: values.password
        }
        await axios.post('https://first-node-js-app-r.herokuapp.com/api/auth/login', logUser)
            .then(data => data.data.token)
            .then(token => {
                localStorage.setItem("token", token)
                navigate('/todo')
            })
            .catch(data => alert(data.response.data.message))
    };
    return (

        <>
            <h1>Welcome to ToDo app</h1>
        <Form
            wrapperCol={{
                span: 4,
                offset: 10
            }}

            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        type: "email",
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary"
                        loading={loadings[1]}
                        htmlType="submit"
                        className="login-form-button"
                >
                    Log in
                </Button>
                Or <Link to="register">register now!</Link>
            </Form.Item>
        </Form>
        </>
    );
};
export default LoginPage;