import { Button, Table } from 'antd'
import React from 'react'

function CategoryList(props) {

    const deleteCategory = (id) => {
        props.remove(id);
    }
    const updateCategory = (id) => {
        props.update(id);
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button danger onClick={() => deleteCategory(id)}>Delete</Button>
        },
        {
            title: 'Update',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button onClick={() => updateCategory(id)}>Update</Button>
        }
    ];

    return (
        <>
            <Table dataSource={props.categories} columns={columns}></Table>
        </>
    )
}

export default CategoryList


