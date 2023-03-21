import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import MenuToOrder from '../containers/MenuToOrder';
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
                    
                    <Route path="*" element={<NotFound />} />
            </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;