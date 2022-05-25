import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList'
import { baseManager } from '../request/baseManager'

function ProductListView() {

    let navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts();
    }, []);



    const getProducts = () => {
        baseManager.getall('/products')
            .then((data) => {
                setLoading(false);
                setProducts(data);
            })
    }

    const removeProduct = (id) => {

        baseManager.delete("/products/" + id)
            .then(() => {
                getProducts();
            }).finally(() => {
                getProducts();
            })

    }

    const updateProduct = (id) => {
        navigate('/updateProduct', {state:{id}});
    }


    return (
        <>
            <Spin tip="Loading..." spinning={loading}>
                <h1>Product List Screen</h1>
                <ProductList products={products} remove={removeProduct} update={updateProduct}></ProductList>
            </Spin>

        </>
    )
}

export default ProductListView
