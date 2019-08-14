import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle} className='Header'>
            <h1>
                <Link style={{color:'#fff'}} to="/">
                    Todo List
                </Link>
            </h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
};

const linkStyle = {
    color: '#fff',
    cursor: 'pointer'
};

export default Header