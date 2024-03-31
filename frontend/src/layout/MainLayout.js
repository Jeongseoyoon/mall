import React from 'react';
import BasicMenu from '../components/menus/BasicMenu';

function MainLayout({children}) {
    return (
        <>
            <BasicMenu/>
            <div className='main-container'>
                {children}
            </div>
        </>
    );
}

export default MainLayout;