import React from 'react';
import Togglebtn from '../Togglebtn/Togglebtn';

const AddServices = ({ head, text }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Togglebtn />
      <div style={{ marginBottom: '2rem' }}>
        <h3>{head}</h3>
        <p style={{ color: '#777', padding: '0.8rem 0' }}>{text}</p>
      </div>
    </div>
  );
};

export default AddServices;
