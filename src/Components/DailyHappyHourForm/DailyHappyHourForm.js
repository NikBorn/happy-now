import React, { Component } from 'react';

class DailyHappyHourForm extends Component {
  constructor() {
    super();
    this.state = {
      day: '',
      startingHours: '',
      endingHours: '',
      special: ''
    };
  }

  
  render() {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayOptions = daysArray.map(day => {
      return (
        <option value={day}>{day}</option>
      )
    })
    const hoursArray = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM',
      '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM', '12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM']
    const hoursOptions = hoursArray.map(hour => {
      return (
        <option value={hour}>{hour}</option>
      )
    })


    return (
      <tr>
        <td>
          <select>
            <option>{this.props.day}</option>
          </select>
        </td>
        <td>
          <select name="start">
            {hoursOptions}
          </select>
        </td>
        <td>
          <select name="end">
            {hoursOptions}
          </select>
        </td>
        <td>
          <input
            onChange={(event) => {
              this.setState({specials: event.target.value});
            }} />
        </td>
      </tr>
    );
  }
}

export default DailyHappyHourForm;