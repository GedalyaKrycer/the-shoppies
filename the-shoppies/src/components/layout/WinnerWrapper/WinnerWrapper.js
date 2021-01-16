import React from 'react';
import './winnerWrapper.scss';
import WinnerContainer from '../../winner/WinnerContainer/WinnerContainer';

const WinnerWrapper = (props) => {
    return (
        <section className="winnerWrapper">
            <div className="ww__inner-container">
                <WinnerContainer />
            </div>
        </section>
    )
}

export default WinnerWrapper;