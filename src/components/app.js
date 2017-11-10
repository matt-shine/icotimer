import React, { Component } from 'react';
import IcoList from '../containers/ico_list'
import ListFilter from '../containers/list_filter';

export default class App extends Component {
  render() {

    let listSytle = {
      width: '100%',
      margin: '0 auto'
    }

    return (
      <div>
        <div className="row">
          <ListFilter />
        </div>
        <div className="row">
          <div className="header col-sm-12">
            <h1>ICO Timer</h1>
          </div>
        </div>
        {/*<div className="row">*/}
          {/*<div className="col-sm-12">*/}
            <IcoList />
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}
