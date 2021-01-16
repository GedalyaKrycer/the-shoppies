import React from 'react';
import './bodyWrapper.scss';

const BodyWrapper = (props) => {
    return (
        <div className="bodyWrapper">
            {props.children}
        </div>
    )
}

export default BodyWrapper;