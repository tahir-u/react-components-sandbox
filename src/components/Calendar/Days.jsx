import React from 'react';

const Days = ({ numberOfDays, currentDay }) => {
  const days = Array.from({length: numberOfDays}, (d, i) => i + 1);
  console.log(days);

  const dayElements = days.map((day) => {
    return(
      day === currentDay ?
        <li key={day}>
          <span className="active">{day}</span>
        </li> :
        <li key={day}>
          {day}
        </li>
    );
  });
  
  return(
    <ul className="days">
      {dayElements}
    </ul>
  );
};

export default Days;