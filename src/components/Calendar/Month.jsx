import React from 'react';

const Month = ({ month, year }) => (
  <div className="month">
    <ul>
      <li>
        {month}
        <br/>
        <span className="year">{year}</span>
      </li>
    </ul>
  </div>
);

export default Month;