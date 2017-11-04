import React, { Component } from 'react';
import DailyHappyHourForm from '../DailyHappyHourForm/DailyHappyHourForm.js';

class HappyHourForm extends Component {
  constructor() {
    super();
    this.state = {
      sunday: ['', ''],
      monday: ['', ''],
      tuesday: ['', ''],
      wednesday: ['', ''],
      thursday: ['', ''],
      friday: ['', ''],
      saturday: ['', '']
    };
  }

  render() {
    const dailyForm = DailyHappyHourForm;
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayOptions = daysArray.map((day, index) => {
      return (
        <DailyHappyHourForm key={index} day={day} />
      );
    });
    return (
      <div className='happy-hour-form'>
        <table>
          <tr className='form-header'>
            <th className='add-form-header'>
              Day
            </th>
            <th>
              Starts
            </th>
            <th>
              Ends
            </th>
            <th>
              Special
            </th>
          </tr>       
          {dayOptions }
        </table>
        <button className='show-more happy-hour-btn'>Submit</button>
      </div>
    );
  }
}

export default HappyHourForm;