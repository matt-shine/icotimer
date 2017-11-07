import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchIcos } from '../actions';

import IcoHead from '../components/ico_head';
import Timer from '../components/timer';

class IcoList extends Component {

  componentWillMount() {
    this.props.fetchIcos();
  }

  renderIco(ico) {
    let cardStyle = {
      color: 'black',
      backgroundColor: 'white',
      display: 'block',
      height: '200px',
      marginTop: '5px',
      marginBottom: '5px',
      padding: '10px'
    }

    let descriptionStyle = {
      textAlign: 'center',
      padding: '10px 0px 0px 10px'
    }

    return ( 
      <div key={ico.name} className="col-sm-6">
        <div style={cardStyle}>
          <div>
            <IcoHead name={ico.name} image={ico.image} />
            <div style={descriptionStyle}>{ico.description}</div>
            <Timer startTime={ico.start_time} endTime={ico.end_time} timezone={ico.timezone} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.icos) {
      return <div>Loading</div>;
    }

    return (
      <div>
       {this.props.icos.map(this.renderIco)}
      </div>
    );
  } 
}

function mapStateToProps(state) {
  return {
    icos: state.icos.data
  };
}

export default connect(mapStateToProps, { fetchIcos })(IcoList);