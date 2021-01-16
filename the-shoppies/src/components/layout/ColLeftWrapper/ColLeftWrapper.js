import React from 'react';
import './colLeftWrapper.scss';

const ColLeftWrapper = (props) => {
    return (
        <div className="colLeft">
            {props.children}
        </div>
    )
}

export default ColLeftWrapper;