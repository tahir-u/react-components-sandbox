import React from 'react';

const VotingEntry = (props) => {
  return(
    <div>
      <p>{props.name} currently has {props.votes} votes.</p>
    </div>
  );
};

export default VotingEntry;