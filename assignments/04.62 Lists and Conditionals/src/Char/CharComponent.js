import React from 'react';

const charComponent = props => {
  return (
    <div className="char" onClick={props.clicked}>{props.char}</div>
  );
};

export default charComponent;
