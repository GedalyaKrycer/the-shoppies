import React from 'react';
import './colRight.scss';

const ColRight = (props) => {
    return (
        <div className="colRight">
            {props.children}
        </div>
    )
}

export default ColRight;