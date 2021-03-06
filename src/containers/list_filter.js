import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import $ from 'jquery';

import { selectFilter, fetchIcos } from '../actions/index';

class ListFilter extends Component {

  constructor(props) {
    super(props);

    this.onDropdownSelect = this.onDropdownSelect.bind(this);
  }

  componentWillMount() {
    this.props.selectFilter();
  }

  onDropdownSelect(val) {
    this.props.selectFilter(val);
    this.props.fetchIcos(val);
  }

  render() {
    return (
      <div>
        <DropdownButton id="dropdown" className="filter-select-btn" bsSize="large" title={this.props.selectedFilter} onSelect={this.onDropdownSelect}>
          <MenuItem eventKey="live">live</MenuItem>
          <MenuItem eventKey="upcoming">upcoming</MenuItem>
          <MenuItem eventKey="finished">finished</MenuItem>
        </DropdownButton>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  if (!state.icos.selectedFilter) {
    fetchIcos();
    return { selectedFilter: 'live'} 
  }

  return {
    selectedFilter: state.icos.selectedFilter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectFilter: selectFilter, fetchIcos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilter)