import React from 'react';

const Repos = React.createClass({
  render() {
    return (
      <div>
        User Profile <br />
        Username: {this.props.username}<br />
        Repos: {this.props.repos}
      </div>
    );
  }
});

export default Repos;
