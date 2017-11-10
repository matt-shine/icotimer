import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchIcos } from '../actions';

import IcoHead from '../components/ico_head';
import Timer from '../components/timer';

class IcoList extends Component {

  constructor(props) {
    super(props);
    this.renderIco = this.renderIco.bind(this);
  }

  componentWillMount() {
    this.props.fetchIcos();
  }

  renderIco(ico) {

    let descriptionStyle = {
      textAlign: 'center',
      padding: '10px 0px 0px 10px'
    }

    return ( 
      <div key={ico.name}>
        <div className="col-sm-12">
          <div className="ico-card">
            <div>
              <IcoHead name={ico.name} image={ico.image} />
              <div style={descriptionStyle}>{ico.description}</div>
              <div style={descriptionStyle}><a href={ico.website_link}>{ico.name}</a></div>
              <div className="row">
                <div className="col-sm-4"></div>
                <Timer type={this.props.selectedFilter} startTime={ico.start_time} endTime={ico.end_time} timezone={ico.timezone} />
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
    icos: state.icos.data,
    selectedFilter: state.icos.selectedFilter
  };
}

export default connect(mapStateToProps, { fetchIcos })(IcoList);