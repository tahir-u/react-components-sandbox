import React from 'react';

const Days = ({ numberOfDays, currentDay, startingDay }) => {
  const paddingDays = Array.from({length: startingDay - 1}, (d, i) => '');
  let days = Array.from({length: numberOfDays}, (d, i) => i + 1);
  
  days = [...paddingDays, ...days];

  const dayElements = days.map((day, index) => {
    return(
      day === currentDay ?
        <li key={index}>
          <span className="active">{day}</span>
        </li> :
        <li key={index}>
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