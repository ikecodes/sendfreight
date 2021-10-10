import React from 'react';

import classes from './Input.module.css';
const Input = ({ unit, measure }) => {
  return (
    <div className={classes.Input_wrapper}>
      <label htmlFor='volume' className={classes.Label}>
        Total {unit}
      </label>
      <input type='text' name='' id='volume' placeholder={measure} className={classes.Input} />
    </div>
  );
};

export default Input;
