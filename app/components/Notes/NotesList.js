'use strict';

import React from 'react';

const NotesList = React.createClass({
  render() {
    const notes = this.props.notes.map((note, index) => {
      return (
        <li className="list-group-item" key={index}>{note}</li>
      );
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  }
});

export default NotesList;
