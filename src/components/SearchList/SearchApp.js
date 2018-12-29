import React from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

import data from './sample/sample';

class SearchApp extends React.Component {
  state = {
    filterText: '',
    caseSensitive: false
  }

  onSearchInput = (filterTerm) => {
    this.setState({
      filterText: filterTerm
    });
    console.log(this.state.filterText);
  }

  onCheckboxInput = () => {
    this.setState((prevState) => ({
      caseSensitive: !prevState.caseSensitive
    }));
  }

  render() {
    return(
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onSearchInput={this.onSearchInput}
          caseSensitive={this.state.caseSensitive}
          onCheckboxInput={this.onCheckboxInput}
        />
        <br/>
        <SearchList
          items={data}
          filterText={this.state.filterText}
          caseSensitive={this.state.caseSensitive}
        />
      </div>
    )
  }
}

export default SearchApp;