'use strict';

import React from 'react';
import createFragment from 'react-addons-create-fragment';

import NotesList from './NotesList';

const Notes = React.createClass({
  render() {
    console.log(this.props.notes);
    return (
      <div>
        <h3>Notes for {this.props.username} </h3>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});

export default Notes;
