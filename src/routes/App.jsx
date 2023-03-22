import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import MenuProducts from '../containers/BurgersMenu';
import Orders from '../pages/Orders';
import ReadyToDeliver from '../pages/ReadyToDeliver';
import Workers from '../pages/Workers';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';
import Menu from '../pages/Menu';

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Routes>
                    <Route path="/" element={<Home />} />
          		    <Route path="/login" element={<Login />} />
                    <Route path='/menu' element={<Menu />} />
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