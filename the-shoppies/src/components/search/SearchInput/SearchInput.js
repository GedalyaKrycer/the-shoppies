import React, { useState } from 'react';
import './searchInput.scss';


const SearchInput = (props) => {

    // Local state
    const [openOptionsMenu, setOpenOptionsMenu] = useState(false)

    const handleOptionsMenu = () => {
        openOptionsMenu ? setOpenOptionsMenu(false) : setOpenOptionsMenu(true);
    }

    const handleMovieFilterToggle = () => {
        props.handleSeriesToggle(false);
        setOpenOptionsMenu(false)
    }

    const handleSeriesFilterToggle = () => {
        props.handleSeriesToggle(true);
        setOpenOptionsMenu(false)
    }

    return (
        <div>
            <label className="search">

                <input
                    type="text"
                    className={`search__input ${openOptionsMenu ? "search__input--tray-open" : null}`}
                    onChange={(event) => props.handleSearch(event)}
                    value={props.searchValue}
                />

                <span style={{ opacity: props.searchFilled ? 0 : 1 }}>

                    {props.seriesToggle ? "Search series titles" : "Search movies titles"}

                </span>

                <svg className="search__magnify-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7797 13.833L12.6644 10.7177C12.5238 10.5771 12.3332 10.499 12.1332 10.499H11.6239C12.4863 9.39596 12.9987 8.00859 12.9987 6.49937C12.9987 2.90909 10.0896 0 6.49937 0C2.90909 0 0 2.90909 0 6.49937C0 10.0896 2.90909 12.9987 6.49937 12.9987C8.00859 12.9987 9.39596 12.4863 10.499 11.6239V12.1332C10.499 12.3332 10.5771 12.5238 10.7177 12.6644L13.833 15.7797C14.1267 16.0734 14.6017 16.0734 14.8923 15.7797L15.7766 14.8954C16.0703 14.6017 16.0703 14.1267 15.7797 13.833ZM6.49937 10.499C4.29021 10.499 2.49976 8.71165 2.49976 6.49937C2.49976 4.29021 4.28708 2.49976 6.49937 2.49976C8.70852 2.49976 10.499 4.28708 10.499 6.49937C10.499 8.70852 8.71165 10.499 6.49937 10.499Z" />
                </svg>

                <button
                    onClick={handleOptionsMenu}
                    className="search__option-btn"
                >
                    <svg
                        viewBox="0 0 5 16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.64706 5.67742C1.34641 5.67742 0.294117 6.71613 0.294117 8C0.294117 9.28387 1.34641 10.3226 2.64706 10.3226C3.94771 10.3226 5 9.28387 5 8C5 6.71613 3.94771 5.67742 2.64706 5.67742ZM5 2.32258C5 3.60645 3.94771 4.64516 2.64706 4.64516C1.34641 4.64516 0.294117 3.60645 0.294117 2.32258C0.294117 1.03871 1.34641 0 2.64706 0C3.94771 0 5 1.03871 5 2.32258ZM5 13.6774C5 14.9613 3.94771 16 2.64706 16C1.34641 16 0.294117 14.9613 0.294117 13.6774C0.294117 12.3935 1.34641 11.3548 2.64706 11.3548C3.94771 11.3548 5 12.3935 5 13.6774Z" />
                    </svg>
                </button>
            </label>
            <div className={`search__filter-tray ${openOptionsMenu ? "search__filter-tray--active" : null}`}>
                <p>search by:</p>
                <div className="search__btn-group">
                    <button
                        onClick={handleMovieFilterToggle}
                        className={`search__filter-btn ${!props.seriesToggle ? "search__filter-btn--active" : "search__filter-btn--default"}`}>
                        Movies
                    </button>
                    <button
                        onClick={handleSeriesFilterToggle}
                        className={`search__filter-btn ${props.seriesToggle ? "search__filter-btn--active" : "search__filter-btn--default"}`}>
                        Series
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;
