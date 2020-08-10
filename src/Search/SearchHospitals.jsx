import React, { useState } from 'react';
import './Search.css';

const SearchHospitals = (props) => {
    const {onSearch, hospitalName,setHospitalName} = props;
    const [displayClearFilters, setDisplayClearFilters] = useState(false);
    const onSearchValueChange = (event) => {
        setHospitalName(event.target.value);
        setDisplayClearFilters(true);
        onSearch(event.target.value);
    };
    const clearSearch = () => {
        setHospitalName('');
        setDisplayClearFilters(false);
        const updatedHospitalName = '';
        onSearch(updatedHospitalName);
    };
    return (
        <div>
            <div>
                <input type="text" className="search-text" autoFocus placeholder="Enter hospital name" value={hospitalName} onChange={(event) => onSearchValueChange(event)}/>
            </div>
            {
                displayClearFilters? <button type="btn" onClick={clearSearch} className="clear-btn">Clear Search</button> : null
            }
        </div>
    );
};



export default SearchHospitals;
