import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';

const MovieSearchContainer = () => {

    // Redux State Hooks
    const searching = useSelector(state => state.search.searching)
    const loadingStatus = useSelector(state => state.search.loading)
    // Redux Dispatch Hooks

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);

    const handleSearch = (event) => {
        setSearchFilled(true);
        if (!event.target.value) {
            setSearchFilled(false);
        }

    }

    let searchResults = null;

    if (searching) {

        if (loadingStatus) {
            searchResults = <Loader />
        } else {
            searchResults = <div>Search Results</div>;
        }
    }

    return (
        <section>
            <SearchInput
                handleSearch={handleSearch}
                searchFilled={searchFilled}
            />
            {searchResults}
        </section>
    )
}

export default MovieSearchContainer;
