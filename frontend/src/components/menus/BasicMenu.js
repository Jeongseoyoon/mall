import React from 'react';
import { Link } from 'react-router-dom';

function BasicMenu(props) {
    return (
        <header>
            <div className='inner'>
                <div className='header-wrap'>

                    <div className=''>
                        <Link to={'/'} className=''>
                            <img src="images/logo.png" alt="Logo"/>
                        </Link> 
                    </div>
                        <nav className='gnb'>
                            <ul className="">
                                <li className=""> 
                                    <Link to={'/'} className=''>Main</Link> 
                                </li>
                                <li className=""> 
                                    <Link to={'/about'} className=''>About</Link> 
                                </li>
                                <li className=""> 
                                    <Link to={'/todo'}>Todo</Link> 
                                </li>
                                <li className=""> 
                                    <Link to={'/board'}>Board</Link> 
                                </li>
                            </ul>
                        </nav>
                    <div className='flex gap-1'>
                        <Link to={'/login'}>Login</Link> 
                        <Link to={'/join'}>Join</Link> 
                    </div>
                </div>
            </div>
        </header>
    );
}

export default BasicMenu;