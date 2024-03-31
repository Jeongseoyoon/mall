import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layout/BasicLayout';
import MainLayout from '../layout/MainLayout';

function MainPage(props) {
    return (
        <MainLayout>
            <img src="images/main_bg_01.jpg" alt="Logo"/>
        </MainLayout>
    );
}

export default MainPage;