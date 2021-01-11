import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';

const MovieSearchContainer = () => {

    // Redux State Hooks

    // Redux Dispatch Hooks

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);

    const handleSearch = (event) => {
        setSearchFilled(true);
        if (!event.target.value) {
            setSearchFilled(false);
        }

    }

    return (
        <section>
            <SearchInput
                handleSearch={handleSearch}
                searchFilled={searchFilled}
            />
            <Loader />
        </section>
    )
}

export default MovieSearchContainer;
