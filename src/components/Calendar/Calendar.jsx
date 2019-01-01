import React from 'react';

import Month from './Month';
import Weekdays from './Weekdays';
import Days from './Days';

import * as dateConstants from './constants';
import './Calendar.css';

class Calendar extends React.Component {
  state = {
    date: new Date()
  }

  getMonth() {
    return dateConstants.months[this.state.date.getMonth()];
  }

  getYear() {
    return this.state.date.getFullYear();
  }

  getDay() {
    return this.state.date.getDay();
  }

  getDays() {
    const year = this.getYear();
    const month = this.state.date.getMonth();
    
    return 32 - new Date(year, month, 32).getDate();
  }

  render() {
    return(
      <React.Fragment>
        <Month
          month={dateConstants.months[this.state.date.getMonth()]}
          year={this.state.date.getFullYear()}
        />
        <Weekdays
          weekdays={dateConstants.days}
        />
        <Days
          numberOfDays={this.getDays()}
          currentDay={this.getDay()}
        />
      </React.Fragment>
    );
  }
}

export default Calendar;