import React from 'react';

const UserProfiles = React.createClass({
  render() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username}<br />
        Bio: {this.props.bio}
      </div>
    );
  }
});

export default UserProfiles;
