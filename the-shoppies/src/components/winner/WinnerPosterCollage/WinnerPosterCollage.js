import React from 'react';
import './winnerPosterCollage.scss';


const WinnerPosterCollage = (props) => {


    return (
        <div className="winnerPoster-container">
            <img
                className="winner-poster winner-poster--left-back"
                src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                alt={`${props.Title} poster`} />
            <img
                className="winner-poster winner-poster--left"
                src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                alt={`${props.Title} poster`} />
            <img
                className="winner-poster winner-poster--winner"
                src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                alt={`${props.Title} poster`} />
            <img
                className="winner-poster winner-poster--right"
                src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                alt={`${props.Title} poster`} />
            <img
                className="winner-poster winner-poster--right-back"
                src="https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
                alt={`${props.Title} poster`} />

        </div>
    )
}

export default WinnerPosterCollage;
