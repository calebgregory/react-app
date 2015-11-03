import React, { Component } from 'react';
import Router from 'react-router';
import createFragment from 'react-addons-create-fragment';

import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      notes: ['note1','note2'],
      bio: createFragment({ name: 'Caleb' }),
      repos: [1,2,3]
    }
  },
//  componentDidMount() {
//    this.ref = new Firebase('https://react-app-11-2.firebaseio.com');
//    const childRef = this.ref.child(this.props.params.username);
//    this.bindAsArray(childRef, 'notes');
//  },
//  componentWillUnmount() {
//    this.unbind('notes');
//  },
  render() {
    const username = this.props.params.username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
