import { Button, Table } from 'antd'
import React from 'react'

function ProductList(props) {

    const deleteProduct = (id) => {
        props.remove(id);
    }

    const updateProduct = (id) => {
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
            title: 'Category Name',
            dataIndex: 'categoryName',
            key: 'categoryName'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        },
        {
            title: 'Update',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button onClick={() => updateProduct(id)}>Update</Button>
        }
    ];

    return (
        <>
            <Table dataSource={props.products} columns={columns}></Table>
        </>
    )
}

export default ProductList


