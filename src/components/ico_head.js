import React, { Component } from 'react';

export default (props) => {
  let imgStyle = {
    margin: '0 auto',
    display: 'block'
  }

  if (props.image) {
    return <img src={props.image} style={imgStyle}/>;
  }
  return <h4>{props.name}</h4>;
}
