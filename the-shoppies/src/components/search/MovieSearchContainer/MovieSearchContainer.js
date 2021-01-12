import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './movieSearchContainer.scss';
import SearchInput from '../SearchInput/SearchInput';
import Loader from '../../ui/Loader/Loader';
import useDebounce from '../../../utilities/debounceHook';
import * as action from '../../../store/actions/index';
import MovieSearchMetaInfo from '../MetaDetailsMovieSearch/MetaDetailsMovieSearch';
import SearchErrorMessage from '../SearchErrorMessage/SearchErrorMessage';

const MovieSearchContainer = () => {

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [triggerExitResults, setTriggerExitResults] = useState(false);

    // Redux State Hooks
    const searching = useSelector(state => state.search.searching)
    const searchLoadingStatus = useSelector(state => state.search.loading)
    const searchError = useSelector(state => state.search.error)
    const apiErrorMessage = useSelector(state => state.search.errorMessage)
    const movieListArray = useSelector(state => state.search.omdbResults)
    const nominationList = useSelector(state => state.nominate.nominationList)

    // Redux Dispatch Hooks
    const searchOmdbApi = useDispatch();
    const clearResults = useDispatch();
    const queryOmdbNomination = useDispatch();


    // Waits half a second for the user to stop typing
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    // Sends search term to API
    useEffect(() => {
        // Cancels search if nothing is inputted
        if (!searchTerm) {
            return;
        }

        // Send search term to Redux once the Denouncer Hook is ready
        if (debouncedSearchTerm) {
            searchOmdbApi(action.searchOmdb(searchTerm));
        }

    }, [debouncedSearchTerm]);

    // Logs search input and turns on/off label
    const handleSearch = (event) => {
        setSearchFilled(true);
        setTriggerExitResults(false);
        if (!event.target.value) {
            setSearchFilled(false);
            setTriggerExitResults(true);
            clearResults(action.clearResults())
        }
        setSearchTerm(event.target.value);
    }

    // Checks Nomination Data
    useEffect(() => {
        console.log(nominationList)
    }, [nominationList])



    // Nominate Button Clicked
    const handleNominate = (index, movieTitle, movieYear) => {
        console.log(index)

        setTriggerExitResults(true);

        setTimeout(() => {
            setSearchFilled(false);
            clearResults(action.clearResults())
            setSearchTerm('');
        }, 630);

        queryOmdbNomination(action.queryOmdbNomination(movieTitle, movieYear));
    }

    // Search Results Display
    let searchResults = null;

    // If the person is currently searching...
    if (searching) {

        // ...Then a loader will show until the api returns results
        if (searchLoadingStatus) {
            searchResults = <Loader />
        } else {
            searchResults = movieListArray && movieListArray.map((movie, index) => {

                return <MovieSearchMetaInfo
                    key={movie.imdbID}
                    exitResults={triggerExitResults}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                    index={index}
                    disable={false}
                    handleClick={() => handleNominate(index, movie.Title, movie.Year)}
                />
            });
        }
    }

    return (
        <section>
            <SearchInput
                handleSearch={handleSearch}
                searchFilled={searchFilled}
                searchValue={searchTerm}
            />

            {searchTerm
                ? <h3 className="results__search-value">Results for: <span>"{searchTerm}"</span></h3>
                : null}

            {searchResults}
            {searchError
                ? <SearchErrorMessage error={apiErrorMessage} />
                : null}
        </section>
    )
}

export default MovieSearchContainer;
