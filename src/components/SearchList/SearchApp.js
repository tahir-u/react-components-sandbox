import React from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

import data from './sample/sample';

class SearchApp extends React.Component {
  state = {
    filterText: ''
  }

  onUserInput = (filterTerm) => {
    this.setState({
      filterText: filterTerm
    });
    console.log(this.state.filterText);
  }

  render() {
    return(
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.onUserInput}
        />
        <br/>
        <SearchList
          items={data}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}

export default SearchApp;