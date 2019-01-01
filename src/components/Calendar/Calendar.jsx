import React from 'react';

import Month from './Month';
import Weekdays from './Weekdays';
import Days from './Days';

import * as utils from './utils';
import './Calendar.css';

class Calendar extends React.Component {
  state = {
    date: new Date()
  }

  render() {
    return(
      <React.Fragment>
        <Month
          month={utils.getMonth(this.state.date)}
          year={utils.getYear(this.state.date)}
        />
        <Weekdays
          weekdays={utils.days}
        />
        <Days
          numberOfDays={utils.getDays(this.state.date)}
          currentDay={utils.getDay(this.state.date)}
          startingDay={utils.getStartingDay(this.state.date)}
        />
      </React.Fragment>
    );
  }
}

export default Calendar;