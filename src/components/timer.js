import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />
  } else {
    return <span>{days} days {hours} hours {minutes} minutes {seconds} seconds</span>
  }
}

export default (props) => {

  return (
    <div>
      <Countdown 
        date={moment(props.endTime).utcOffset(props.timezone.replace('UTC', '')).valueOf()} 
        renderer={renderer}
        />
    </div>
  );
}

	// "end_time": "2016-03-21 00:00:00",
				// "timezone": "UTC+0",