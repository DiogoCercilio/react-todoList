import React from 'react';

function About() {
    return (
        <div style={pageStyle}>
            <h1>About</h1>
            <p>This is a simple todo list.</p>
        </div>
    )
}

const pageStyle = {
    width: '1000px',
    maxWidth: '100%',
    margin: '0 auto'
};

export default About