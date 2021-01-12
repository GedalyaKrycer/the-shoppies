import React from 'react';
import './buttonPrimary.scss';

const ButtonPrimary = (props) => {
    return (
        <button
            className="buttonPrimary"
            disabled={props.disable}
            onClick={props.handleClick}
        >
            {props.children}
        </button>
    )
}

export default ButtonPrimary;