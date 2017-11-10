import _ from 'lodash';
import React, { Component } from 'react';
import moment from 'moment';
import Countdown from 'react-countdown-now';

const Completionist = () => <div className="timer"><div className="timer-block-value">Finished</div></div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />
  } else {

    return (
      <div className="timer">
        <div className="col-sm-4"></div>
        <div className="timer-block col-sm-1">
          <div className="timer-block-value">
            {days}
          </div>
          <div className="timer-block-label">
            Days
          </div>
        </div>
        <div className="timer-block col-sm-1">
          <div className="timer-block-value">
            {hours}
          </div>
          <div className="timer-block-label">
            Hours
          </div>
        </div>
        <div className="timer-block col-sm-1">
          <div className="timer-block-value">
            {minutes}
          </div>
          <div className="timer-block-label">
            Minutes
          </div>
        </div>
        <div className="timer-block col-sm-1">
          <div className="timer-block-value">
           {seconds}
          </div>
          <div className="timer-block-label">
            Seconds
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    ) 
  }
}

export default (props) => {
  switch (props.type) {
    case 'live':
      return (
        <div>
          <Countdown 
            date={moment(props.endTime).utcOffset(props.timezone.replace('UTC', '')).valueOf()} 
            renderer={renderer}
            />
        </div>
      );
    case 'upcoming':
      return (
        <div>
          <Countdown 
            date={moment(props.startTime).utcOffset(props.timezone.replace('UTC', '')).valueOf()} 
            renderer={renderer}
            />
        </div>
      );
    case 'finished':
      return <div className="timer"><div className="timer-block-value">Finished {moment(props.endTime).format("MMMM Do YYYY, h:mm:ssa")} {props.timezone}</div></div>
  }
}