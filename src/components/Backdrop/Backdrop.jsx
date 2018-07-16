import React from 'react';

const backDrop = (props) => props.show ? <div className="backdrop" onClick={props.closeModal}></div> : null;

export default backDrop;