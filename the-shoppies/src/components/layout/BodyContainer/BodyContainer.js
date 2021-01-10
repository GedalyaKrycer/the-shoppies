import React from 'react';
import './bodyContainer.scss';

const BodyContainer = (props) => {
    return (
        <div className="bodyContainer">
            {props.children}
        </div>
    )
}

export default BodyContainer;