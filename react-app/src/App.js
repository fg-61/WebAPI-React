import { Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomeView from "./project/Views/HomeView";
import CategoryListView from "./project/Views/CategoryListView";
import ProductListView from "./project/Views/ProductListView";
import AddProductView from "./project/Views/AddProductView";
import AddCategoryView from "./project/Views/AddCategoryView";
import './App.css';
import UpdateCategoryView from './project/Views/UpdateCategoryView';
import UpdateProductView from './project/Views/UpdateProductView';

function App() {

    const { Header, Content, Footer } = Layout;
  
  
  return (
    <>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"> <Link to='/categories'>Categories</Link> </Menu.Item>
              <Menu.Item key="2"> <Link to='/products'>Products</Link> </Menu.Item>
              <Menu.Item key="3"> <Link to='/addcategory'>Add Category</Link> </Menu.Item>
              <Menu.Item key="4"> <Link to='/addproduct'>Add Product</Link> </Menu.Item>
            </Menu>
          </Header>
          <Content className='site-layout' style={{ padding: '0 50px', marginTop: 64}}>
            <div className='site-layout-background' style={{padding: 24, minHeight: 380}}>
              <Routes>
                <Route path="/" element={<HomeView />}></Route>
                <Route path="/categories" element={<CategoryListView />}></Route>
                <Route path="/products" element={<ProductListView />}></Route>
                <Route path="/addcategory" element={<AddCategoryView />}></Route>
                <Route path="/addproduct" element={<AddProductView />}></Route>
                <Route path="/updatecategory" element={<UpdateCategoryView />}></Route>
                <Route path="/updateProduct" element={<UpdateProductView />}></Route>
              </Routes>
            </div>
          </Content>
          <Footer style={{textAlign:'center'}}>©2022 Fatih Gören</Footer>
        </Layout>
    </>
  );
}

export default App;
