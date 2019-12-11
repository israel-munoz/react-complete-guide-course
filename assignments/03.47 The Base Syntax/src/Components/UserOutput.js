import React from 'react';

const userOutput = props => {
  return (
    <div className="user-output" style={props.style}>
      <h2>{props.title || 'Output'}</h2>
      <div>Username: {props.username}</div>
    </div>
  );
}

export default userOutput;
