import React from 'react';
import { FaMapMarkerAlt, FaCalendarDay, FaSortDown } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';

import classes from './Forms.module.css';
const Forms = () => {
  return (
    <div>
      <div className={classes.Input_wrapper}>
        <div className={classes.Imex}>
          <span className={classes.Imex_span}>Import</span>
          <span className={classes.Divider}>|</span>
          <span className={classes.Imex_span}>Export</span>
        </div>
        <div className={classes.Input_box}>
          <FaMapMarkerAlt className={classes.Icon} />
          <input type='text' placeholder='From City or port' className={classes.Input} />
        </div>
        <div className={classes.Input_box}>
          <FaMapMarkerAlt className={classes.Icon} />
          <input type='text' placeholder='From City or port' className={classes.Input} />
        </div>
        <div className={classes.Input_box}>
          <FaCalendarDay className={classes.Icon} />
          <input type='text' placeholder='Ready date' className={classes.Input} />
        </div>
        <div className={classes.Input_box}>
          <input type='text' placeholder='Incoterms' className={classes.Input} />
          <FaSortDown />
        </div>
        <div className={classes.Input_box}>
          <input type='text' placeholder='Total cargo value' className={classes.Input} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
