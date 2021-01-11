import React, { useState } from 'react';
import './searchInput.scss';


const SearchInput = (props) => {

    // Local States
    const [searchFilled, setSearchFilled] = useState(false);

    const handleSearch = (event) => {
        setSearchFilled(true);
        if (!event.target.value) {
            setSearchFilled(false);
        }

    }


    return (
        <label className="search">

            <input
                type="text"
                className="search__input"
                onChange={props.handleSearch}
            />

            <span style={{ opacity: searchFilled ? 0 : 1 }}>Search movies titles</span>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.7797 13.833L12.6644 10.7177C12.5238 10.5771 12.3332 10.499 12.1332 10.499H11.6239C12.4863 9.39596 12.9987 8.00859 12.9987 6.49937C12.9987 2.90909 10.0896 0 6.49937 0C2.90909 0 0 2.90909 0 6.49937C0 10.0896 2.90909 12.9987 6.49937 12.9987C8.00859 12.9987 9.39596 12.4863 10.499 11.6239V12.1332C10.499 12.3332 10.5771 12.5238 10.7177 12.6644L13.833 15.7797C14.1267 16.0734 14.6017 16.0734 14.8923 15.7797L15.7766 14.8954C16.0703 14.6017 16.0703 14.1267 15.7797 13.833ZM6.49937 10.499C4.29021 10.499 2.49976 8.71165 2.49976 6.49937C2.49976 4.29021 4.28708 2.49976 6.49937 2.49976C8.70852 2.49976 10.499 4.28708 10.499 6.49937C10.499 8.70852 8.71165 10.499 6.49937 10.499Z" />
            </svg>
        </label>
    )
}

export default SearchInput;
