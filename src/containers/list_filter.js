import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { selectFilter, fetchIcos } from '../actions/index';

class ListFilter extends Component {

  constructor(props) {
    super(props);

    this.onDropdownSelect = this.onDropdownSelect.bind(this);
  }

  componentWillMount() {
    // this.setState({selectedFilter: 'live'})
    this.props.selectFilter();
  }

  onDropdownSelect(val) {
    this.props.selectFilter(val);
    this.props.fetchIcos(val);
  }

  render() {
    return (
      <div>
        <DropdownButton id="dropdown" title={this.props.selectedFilter} onSelect={this.onDropdownSelect}>
          <MenuItem eventKey="live">Live</MenuItem>
          <MenuItem eventKey="upcoming">Upcoming</MenuItem>
          <MenuItem eventKey="finished">Finished</MenuItem>
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