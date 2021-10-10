import React from 'react';

import classes from './Servicebox.module.css';
const Servicebox = ({ active, logo, text, breakText }) => {
  const Servicebox = {
    background: `${active ? '#0745a6' : 'none'}`,
    border: `${active ? 'none' : '1px solid #ebebeb'}`,
    borderRadius: '0.5rem',
    paddingTop: '2rem',
    paddingLeft: '1rem',
    marginRight: '1rem',
    color: `${active ? '#fff' : '#777'}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    overflow: 'hidden',
    // flexGrow: '1',
    width: '15rem',
  };
  return (
    <div style={Servicebox}>
      <p style={{ wordBreak: 'break-all', marginRight: '1.5rem' }}>
        {breakText ? (
          <div>
            <div>{text.slice(0, 6)}</div>
            <div>{text.slice(7, text.lenght)}</div>
          </div>
        ) : (
          `${text}`
        )}
      </p>
      <img src={logo} alt='Service logo' height='60rem' style={{ height: '3rem', marginLeft: '0.2rem', transform: 'translate(0.2rem, 0.2rem)' }} />
    </div>
  );
};

export default Servicebox;
