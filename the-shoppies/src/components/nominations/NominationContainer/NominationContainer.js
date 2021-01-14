import React from 'react';
import './nominationContainer.scss';
import NominationRow from '../NominationRow/NominationRow';

const NominationContainer = () => {
    return (
        <section className="nom-container">
            <div className="nom-container__col-left"></div>
            <div className="nom-container__col-right">
                <NominationRow />

            </div>
        </section>
    )
}

export default NominationContainer;
