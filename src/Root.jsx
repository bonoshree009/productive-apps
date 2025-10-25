import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;