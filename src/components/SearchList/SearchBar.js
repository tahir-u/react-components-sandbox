import React from 'react';

const SearchBar = (props) => {
  const getSearchInput = (event) => event.target.value;

  return(
    <div className="form-group">
      <input
        type="search"
        className="form-control"
        value={props.filterText}
        onChange={(event) => props.onSearchInput(getSearchInput(event))}
      />
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          value={props.caseSensitive}
          onChange={() => props.onCheckboxInput()}
          id="case-sensitive"
        />
        <label htmlFor="case-insensitive" className="form-check-label">Case sensitive</label>
      </div>
    </div>
  );
}

export default SearchBar;