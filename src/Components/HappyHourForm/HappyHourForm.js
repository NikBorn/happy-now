import React, { Component } from 'react';
import DailyHappyHourForm from '../DailyHappyHourForm/DailyHappyHourForm.js';

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
    console.log(day, name, input)
    if (name === 'startingHours') {
      let currentState = [...this.state[day]]
      currentState.splice(0, 1, input)
      this.setState({ [day]: currentState })
      // console.log(currentState)
      
    }
    if (name === 'endingHours') {
      let currentState = [...this.state[day]]
      // console.log(currentState)
      currentState.splice(1, 1, input)
      this.setState({ [day]: currentState })
    }
    if (name === 'special') {
      let currentState = [...this.state[day]]
      currentState.splice(2, 1, input)
      this.setState({ [day]: currentState })
      // console.log(currentState)
    }

    // this.setState({
    //   [day]: {
    //     [name]: input
    //   }
    // })
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
            console.log(this.state)
          }}
        >Submit</button>
      </div>
    );
  }
}

export default HappyHourForm;