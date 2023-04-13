import React from 'react'
import './body.css'
import Display from '../Screen/Display';

function UpperBody(props) {
 
  return (
    <div className="upper">
      <Display showMenu={props.showMenu}/> 
    </div>
  );
}

export default UpperBody;