import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseManager } from '../request/baseManager'

function AddCategoryView() {

    let navigate = useNavigate();

    const onFinish = (values) => {
        baseManager.add("/categories",values)
        .then(() => {

            navigate('/categories');
        })

    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
            >

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
}

export default AddCategoryView