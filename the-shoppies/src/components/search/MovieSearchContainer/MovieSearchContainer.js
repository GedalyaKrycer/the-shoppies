import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';
import useDebounce from '../../../utilities/debounceHook';

const MovieSearchContainer = () => {

    // Redux State Hooks
    const searching = useSelector(state => state.search.searching)
    const loadingStatus = useSelector(state => state.search.loading)

    // Redux Dispatch Hooks

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Waits half a second for the user to stop typing
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (!searchTerm) {
            return;
        }
        if (debouncedSearchTerm) {
            console.log(searchTerm);
        }

    }, [debouncedSearchTerm, searchTerm]);

    const handleSearch = (event) => {
        setSearchFilled(true);
        if (!event.target.value) {
            setSearchFilled(false);
        }

        setSearchTerm(event.target.value);

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
                searchValue={searchTerm}
            />
            {searchResults}
        </section>
    )
}

export default MovieSearchContainer;
