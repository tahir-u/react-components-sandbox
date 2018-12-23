import React from 'react';

const VotingEntry = (props) => {
  const voteSuffix = (props.votes === 1) ? '' : 's';
  return(
    <div>
      <p>{props.name} currently has {props.votes} vote{voteSuffix}.</p>
    </div>
  );
};

export default VotingEntry;