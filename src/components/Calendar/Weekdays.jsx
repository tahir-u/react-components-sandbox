import React from 'react';

const Weekdays = ({ weekdays }) => (
  <ul className="weekdays">
    {weekdays.map((weekday) => {
      return(
        <li key={weekday}>
          {weekday}
        </li>
      )
    })}
  </ul>
);

export default Weekdays;