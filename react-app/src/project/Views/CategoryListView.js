import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { baseManager } from '../request/baseManager';

function CategoryListView() {

    let navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategories();
    }, []);



    const getCategories = () => {
        baseManager.getall('/categories')
            .then((data) => {
                setLoading(false);
                setCategories(data);
            })
    }

    const removeCategory = (id) => {

        baseManager.delete("/categories/" + id)
            .then((res) => {
                getCategories();

            }).finally(() => {
                getCategories();
            })

    }
    const updateCategory = (id) => {
        navigate('/updateCategory', {state:{id}});
    }

    return (
        <>
            <Spin tip="Loading..." spinning={loading}>
                <h1>Category List Screen</h1>
                <CategoryList categories={categories} remove={removeCategory} update={updateCategory}></CategoryList>
            </Spin>

        </>
    )
}

export default CategoryListView
