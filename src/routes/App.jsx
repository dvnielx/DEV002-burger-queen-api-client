import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import MenuProducts from '../containers/MenuProducts';
import MenuToOrder from '../containers/MenuToOrder';
import Orders from '../containers/Orders';
import ReadyToDeliver from '../containers/ReadyToDeliver';
import Workers from '../containers/Workers';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                    <Route path="/" element={<Home />} />
          		    <Route path="/login" element={<Login />} />
                    <Route path='/menu-to-order' element={<MenuToOrder />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/ready-to-deliver' element={<ReadyToDeliver />} />
                    <Route path='/workers' element={<Workers />} />
                    <Route path='/menu-products' element={<MenuProducts />} />
                    <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </BrowserRouter>
    );
}

export default App;