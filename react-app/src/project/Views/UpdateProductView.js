import { Button, Form, Input, InputNumber, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { baseManager } from '../request/baseManager'

function UpdateProductView() {
    const location = useLocation();

    let navigate = useNavigate();
    const id = location.state.id;
    const onFinish = (values) => {
        values.id = id;
        console.log(values);
        baseManager.update("/products/" + id,values)
        .then(() => {
            navigate('/products');
        })

    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
            getCategories();
    }, []);

    const getCategories = () => {
        baseManager.getall('/categories')
            .then((data) => {
                setCategories(data);
            })
    }

    return (
        <>
            <h1>Product Update</h1>
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
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <InputNumber style={{ width: '100%' }}/>
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label="Category"
                    name="categoryId"
                    rules={[{required: true, message: 'Please input your category'}]}>
                    <Select>
                    {
                        categories && categories.map((item,key) => {

                            return (
                                <Select.Option key={key} value={item.id}>{item.name}</Select.Option>
                            )
                        })
                    }
                        
                    </Select>
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

export default UpdateProductView