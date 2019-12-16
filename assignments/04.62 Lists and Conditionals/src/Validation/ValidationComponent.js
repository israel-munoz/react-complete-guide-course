import React from 'react';

const validationComponent = props => {
  const isShort = props.valueLength < props.minimumLength;
  const styles = {
    color: isShort ? 'red' : 'green'
  };
  return (
    <div style={styles}>{isShort ? 'Text too short' : 'Text long enough'}</div>
  )
};

export default validationComponent;
