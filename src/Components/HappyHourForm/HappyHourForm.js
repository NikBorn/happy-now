import React, { Component } from 'react';
import DailyHappyHourForm from '../DailyHappyHourForm/DailyHappyHourForm.js';
import fire from '../../fire.js';


class HappyHourForm extends Component {
  constructor() {
    super();
    this.state = {
      Sunday: ['', '', ''],
      Monday: ['x', 'x', 'x'],
      Tuesday: ['', '', ''],
      Wednesday: ['', '', ''],
      Thursday: ['', '', ''],
      Friday: ['', '', ''],
      Saturday: ['', '', ''],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(day, name, input) {
    let currentState = [...this.state[day]]
    if (name === 'startingHours') {
      currentState.splice(0, 1, input)
    }
    if (name === 'endingHours') {
      currentState.splice(1, 1, input)
    }
    if (name === 'special') {
      currentState.splice(2, 1, input)
    }
    this.setState({ [day]: currentState })
  }

  addHappyHourToFirebase() {
    const itemsRef = fire.database().ref('happy-hours');
    const item = {
      location: this.props.locationInfo.id,
      happyHours: this.state
    };
    itemsRef.push(item);
  }

  render() {
    const dailyForm = DailyHappyHourForm;
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayOptions = daysArray.map((day, index) => {
      return (
        <DailyHappyHourForm key={index} day={day} handleChange={this.handleChange} />
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
        <button className='show-more happy-hour-btn'
          onClick={(event) => {
            event.preventDefault()
            this.addHappyHourToFirebase()
          }}
        >Submit</button>
      </div>
    );
  }
}

export default HappyHourForm;