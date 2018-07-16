import React from 'react';

const button = (props) => {
  return (
    <button type="button" className={props.buttonClass} onClick={props.buttonClickHandler}>{props.children}</button>
  )
}

export default button;