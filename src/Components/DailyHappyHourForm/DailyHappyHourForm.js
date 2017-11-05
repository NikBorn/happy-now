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

  // handleChange(day, string, input) {
  //   this.props.handleChange()
  // }
  
  render() {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const dayOptions = daysArray.map((day, index) => {
      return (
        <option key={index} value={day}>{day}</option>
      )
    })
    const hoursArray = ['10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM',
      '7:00PM', '8:00PM', '9:00PM', '10:00PM', '11:00PM', '12:00AM', '1:00AM', '2:00AM', '3:00AM', '4:00AM']
    const hoursOptions = hoursArray.map((hour, index) => {
      return (
        <option key={index} value={hour}>{hour}</option>
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
          <select name='startingHours'
            onChange={(event)=> {
              this.props.handleChange(this.props.day, 'startingHours', event.target.value)
            }}>
            {hoursOptions}
          </select>
        </td>
        <td>
          <select name='endingHours'
            onChange={(event)=> {
              this.props.handleChange(this.props.day, 'endingHours', event.target.value)
            }}
          >
            {hoursOptions}
          </select>
        </td>
        <td>
          <input name='special'
            onChange={(event) => {
              this.props.handleChange(this.props.day, 'special', event.target.value)
            }} />
        </td>
      </tr>
    );
  }
}

export default DailyHappyHourForm;