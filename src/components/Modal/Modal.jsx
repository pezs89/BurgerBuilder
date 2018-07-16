import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  return (
    <div>
      <Backdrop show={props.show} closeModal={props.closeModal}/>
      <div className={"modal-overlay" + (props.show ? ' modal-overlay--transform' : '')}>
        {props.children}
      </div>
    </div>
  )
}

export default modal;