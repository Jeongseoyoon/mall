import React from 'react';
import BasicMenu from '../components/menus/BasicMenu';

function BasicLayout({children}) {
    return (
        <>
            <BasicMenu/>
            <div className='container'>
                <div className="wrap">
                    <div className='box'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasicLayout;