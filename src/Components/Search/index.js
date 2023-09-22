import React, { useState } from 'react'
import { AsyncPaginate, geoApiOptions } from 'react-select-async-paginate'

import GEO_API_URL from "../../api"

function Search({onSearchChange}) {

    const [search, setSearch]=useState(null)

    const handleOnChange=(searchData)=>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions=async(inputValue)=>{
        return
            try {
                const response = await fetch(`${GEO_API_URL}`, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
    
    }

  return (
    <div>
        <AsyncPaginate
            placeholder='Search for city...'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    </div>
  )
}

export default Search
