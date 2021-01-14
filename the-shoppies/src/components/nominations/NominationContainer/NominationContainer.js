import React from 'react';
import './nominationContainer.scss';
import NominationRow from '../NominationRow/NominationRow';
import { useSelector } from "react-redux";

const NominationContainer = () => {

    const nominationList = useSelector(state => state.nominate.nominationList);
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
