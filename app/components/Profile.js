import React, { Component } from 'react';
import Router from 'react-router';

const Profile = React.createClass({
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          Repos Component
        </div>
        <div className="col-md-4">
          Notes Component
        </div>
      </div>
    )
  }
});

module.exports = Profile;
