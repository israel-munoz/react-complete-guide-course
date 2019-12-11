import React from 'react';

const userInput = props => {
  return (
    <div className="user-input">
      <h2>Input</h2>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" onChange={props.change} value={props.username}/>
    </div>
  );
}

export default userInput;
