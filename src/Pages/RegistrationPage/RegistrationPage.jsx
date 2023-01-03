import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {
    Button,
    Form,
    Input,
    Select,
    InputNumber,
} from 'antd';
import axios from "axios";





const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 4,
        },
    },
};

const RegistrationPage = () => {
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
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        enterLoading(1)
        const regUser = {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            isMan: values.isMan === 'male',
            age: values.age
        }
        await axios.post('https://first-node-js-app-r.herokuapp.com/api/users/register', regUser)
            .then(data => alert(`Вы успешно зарегестрированы ${values.username}`)).then(() => navigate('/'))
            .catch(data => alert(data.response.data.errors.map((item, id) => `Ошибка №${id+1}: ${item.msg} \n` ).join('')))
    };

    return (
        <>
            <h1>Registration</h1>
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}

        >
            <Form.Item
                name="name"
                label="Name"
                tooltip="Just your name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your name!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="username"
                label="Username"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="isMan"
                label="Gender"
                rules={[
                    {
                        required: true,
                        message: 'Please select gender!',
                    },
                ]}
            >
                <Select placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name='age'
                label="Age"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary"
                        htmlType="submit"
                        loading={loadings[1]}
                >
                    Register
                </Button>
                <Link to='/'><Button type="link">Back</Button></Link>
            </Form.Item>


        </Form>
        </>
    );
};
export default RegistrationPage;