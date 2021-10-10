import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../../images/logo.png';
import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <img src={Logo} alt='company logo' className={classes.Logo} />
      <div className={classes.Input_box}>
        <input type='text' placeholder='Search' className={classes.Input} />
        <FaSearch color='#FFF' />
      </div>

      <div className={classes.Button_box}>
        <button className={classes.Btn_outline}>Request Quote</button>
        <button className={classes.Btn_nooutline}>Book ship</button>
      </div>
    </nav>
  );
};

export default Navbar;
