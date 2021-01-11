import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';
import useDebounce from '../../../utilities/debounceHook';

const MovieSearchContainer = () => {

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Redux State Hooks
    const searching = useSelector(state => state.search.searching)
    const loadingStatus = useSelector(state => state.search.loading)

    // Redux Dispatch Hooks



    // Waits half a second for the user to stop typing
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Sends search term to API
    useEffect(() => {
        // Cancels search if nothing is inputted
        if (!searchTerm) {
            return;
        }

        // Carries out actions once the Denouncer Hook is ready
        if (debouncedSearchTerm) {
            console.log(searchTerm);
        }

    }, [debouncedSearchTerm, searchTerm]);

    // Logs search input and turns on/off label
    const handleSearch = (event) => {
        setSearchFilled(true);
        if (!event.target.value) {
            setSearchFilled(false);
        }
        setSearchTerm(event.target.value);
    }

    // Search Results Display
    let searchResults = null;

    // If the person is currently searching...
    if (searching) {

        // ...Then a loader will show until the api returns results
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
