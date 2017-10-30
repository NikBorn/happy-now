import React from 'react';
import {increaseCount} from '../../actions/index.js'
import { connect } from 'react-redux';


const ShowMoreButton = (props) => {
  console.log(props)
  return (
    <button 
      onClick={event=> {
      event.preventDefault();
      props.increaseCount();
    }}>
      Show More
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: (locations) => {
      dispatch(increaseCount(locations));
    },
  }

}

export default connect(null, mapDispatchToProps)(ShowMoreButton)