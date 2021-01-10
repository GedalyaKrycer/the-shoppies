import React from 'react';
import './colLeft.scss';

const ColLeft = (props) => {
    return (
        <div className="colLeft">
            {props.children}
        </div>
    )
}

export default ColLeft;