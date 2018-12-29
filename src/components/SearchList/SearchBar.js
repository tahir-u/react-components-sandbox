import React from 'react';

const SearchBar = (props) => {
  const getSearchInput = (event) => event.target.value;

  return(
    <div className="input-group">
      <input
        type="search"
        className="form-control"
        value={props.filterText}
        onChange={(event) => props.onUserInput(getSearchInput(event))}
      />
    </div>
  );
}

export default SearchBar;