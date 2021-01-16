import React, { useState, useEffect } from 'react';
import './winnerContainer.scss';
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';


const WinnerContainer = () => {

    // Local State 
    // const [delayNominationAnimation, setDelayNominationAnimation] = useState(false)

    // Redux States Hooks
    // const nominationList = useSelector(state => state.nominate.nominationList);

    // Redux Dispatch Hooks
    // const setNominationsCompleted = useDispatch();


    return (
        <section className="winnerContainer">
            <div className="winnerCrown">
                <div className="winnerCrown__spoke1"></div>
                <div className="winnerCrown__spoke2"></div>
                <div className="winnerCrown__spoke3"></div>
                <div className="winnerCrown__spoke4"></div>
                <div className="winnerCrown__spoke5"></div>
            </div>

        </section>
    )
}

export default WinnerContainer;
