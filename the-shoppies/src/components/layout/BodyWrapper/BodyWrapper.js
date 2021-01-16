import React from 'react';
import './bodyWrapper.scss';

const BodyWrapper = (props) => {
    return (
        <main className="bodyWrapper">
            {props.children}
        </main>
    )
}

export default BodyWrapper;