import React from 'react';
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';

const MovieSearchContainer = () => {



    return (
        <section>
            <SearchInput />
            <Loader />
        </section>
    )
}

export default MovieSearchContainer;
