import React from 'react';

const Counter = ({ limit, current }) => (
  <div className="input-text-prepend">
    <span>&nbsp;{current} / {limit} characters</span>
  </div>
);

export default Counter;