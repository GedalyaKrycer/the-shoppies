import React from 'react';
import './winnerPosterCollage.scss';
import placeholderImg from '../../nominations/NominationRow/movie-placeholder.jpg';


const WinnerPosterCollage = (props) => {

    const movie1 = props.nominationList[0];
    const movie2 = props.nominationList[1];
    const movie3 = props.nominationList[2];
    const movie4 = props.nominationList[3];
    const movie5 = props.nominationList[4];




    return (
        <div className="winnerPoster-container">
            <img
                className="winner-poster winner-poster--left-back"
                src={movie2.Poster}
                alt={`${movie2.Title} poster`}
            />
            <img
                className="winner-poster winner-poster--left"
                src={movie3.Poster}
                alt={`${movie3.Title} poster`}
            />
            <img
                className="winner-poster winner-poster--winner"
                src={movie1.Poster}
                alt={`${movie1.Title} poster`}
            />
            <img
                className="winner-poster winner-poster--right"
                src={movie4.Poster}
                alt={`${movie4.Title} poster`}
            />
            <img
                className="winner-poster winner-poster--right-back"
                src={movie5.Poster}
                alt={`${movie5.Title} poster`}
            />

        </div>
    )
}

export default WinnerPosterCollage;
