import React from 'react';

const SearchList = (props) => {
  // Assumes a simple data structure with just a name and ID element
  const filteredSearchItems = props.items.filter((item) => {
    return props.caseSensitive ?
      item.name.indexOf(props.filterText) !== -1 :
      item.name.toLowerCase().indexOf(props.filterText.toLowerCase()) !== -1;
  });

  return(
    <ul className="list-group">
      {filteredSearchItems.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default SearchList;