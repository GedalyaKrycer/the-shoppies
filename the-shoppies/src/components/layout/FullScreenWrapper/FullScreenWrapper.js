import React from 'react';
import './fullScreenWrapper.scss';

const FullScreenWrapper = (props) => {
    return (
        <section className="fullScreenWrapper">
            <div className="fsw__inner-container">
                {props.children}
            </div>
        </section>
    )
}

export default FullScreenWrapper;