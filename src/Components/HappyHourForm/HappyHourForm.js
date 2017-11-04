import React, { Component } from 'react';

class HappyHourForm extends Component {
  constructor() {
    super();
    this.state = {
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: ''
    }
  }

  render() {
    return (
      <table>
        <tr className='form-header'>
          <th>
            Day
          </th>
          <th>
            Hours
          </th>
          <td>
            Special
          </td>
        </tr>
        <tr>
          <td>
            Monday
          </td>
          <td constenteditable='true'>
            <input />
          </td>
          <td constenteditable='true'>
            <input />
          </td>
        </tr>
      </table>
    )
  }
}

export default HappyHourForm