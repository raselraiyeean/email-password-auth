import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../header/header';

const LayOut = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;