import React from 'react';

const HappyHourCard = (props) => {
  const happyHours = props.happyHourInfo.happyHours
  // console.log(happyHours)
  const happyKeys = Object.keys(happyHours)

  const displayHours = happyKeys.map(day=> {
    return(
      <tr key={day}>
        <td className='happy-data'>
          {day}
          </td>
        <td className='happy-data'>
          {happyHours[day][0] + '-' + happyHours[day][1]}
        </td>
        <td className='happy-data'>
          {happyHours[day][2]}
        </td>
      </tr>
    )
  })

  console.log(happyKeys)
  return (
    <div className='happy-hour-card'>
      <h4 className='happy-header'>{props.happyHourInfo.name}</h4>
      <table>
        <tbody>
        <tr>
          <th>
            Day
          </th>
          <th>
            Happy Hours
          </th>
          <th>
            Happy Hour Specials
          </th>
        </tr>
        { displayHours }
        </tbody>
      </table>

    </div>
  )
}

export default HappyHourCard;