import React, { useEffect } from 'react';
import './nominationContainer.scss';
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';
import NominationRow from '../NominationRow/NominationRow';
import NominationCounter from '../NominationCounter/NominationCounter';

const NominationContainer = () => {

    // Redux States Hooks
    const nominationList = useSelector(state => state.nominate.nominationList);

    // Redux Dispatch Hooks
    const setNominationsCompleted = useDispatch();
    const cancelNomination = useDispatch();
    const setNominationList = useDispatch();

    // Checks when the list reaches 5
    useEffect(() => {
        if (nominationList.length === 5) {
            setNominationsCompleted(action.setNominationsCompleted(true));
        }
    }, [nominationList, setNominationsCompleted])


    // Pulls Nomination List from local storage
    useEffect(() => {

        const localData = localStorage.getItem('nominationList');

        if (localData) {
            setNominationList(action.storeAllNominations(JSON.parse(localData)));
            console.log("Local Data Stored in Redux");
        }

    }, [setNominationList])


    // Saves resultsArray to local storage
    useEffect(() => {
        localStorage.setItem('nominationList', JSON.stringify(nominationList));

    }, [nominationList])

    console.log(nominationList)

    const removeHandler = (title) => {
        console.log("Nomination removed")
        console.log(title)
        cancelNomination(action.cancelNomination(title));
    }

    return (
        <section className="nom-container">
            <div className="nom-container__counter-wrapper">
                <NominationCounter
                    nominationList={nominationList}
                />
            </div>

            {nominationList && nominationList.map((nom, index) => {
                return <NominationRow
                    key={nom.imdbID}
                    movieIndex={index + 1}
                    img={nom.Poster}
                    title={nom.Title}
                    imdbID={nom.imdbID}
                    imdbRating={nom.imdbRating}
                    mpaa={nom.Rated}
                    genres={nom.Genre}
                    remove={() => removeHandler(nom.Title)}
                />
            })}

        </section>
    )
}

export default NominationContainer;
