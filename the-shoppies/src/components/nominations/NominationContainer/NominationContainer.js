import React, { useEffect } from 'react';
import './nominationContainer.scss';
import { useSelector, useDispatch } from "react-redux";
import * as action from '../../../store/actions/index';
import NominationRow from '../NominationRow/NominationRow';

const NominationContainer = () => {

    // Redux States Hoks
    const nominationList = useSelector(state => state.nominate.nominationList);

    // Redux Dispatch Hooks
    const setNominationsCompleted = useDispatch();

    useEffect(() => {
        if (nominationList.length === 5) {
            setNominationsCompleted(action.setNominationsCompleted(true));
        }
    }, [nominationList, setNominationsCompleted])


    console.log(nominationList)

    const removeHandler = () => {
        console.log("Nomination removed")
    }

    return (
        <section className="nom-container">
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
                    remove={removeHandler}
                />
            })}

        </section>
    )
}

export default NominationContainer;
