import React, { useState } from 'react';

import './Togglebtn.css';
const Togglebtn = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className={`toggle-container ${selected ? 'notdisabled' : ''}`} onClick={() => setSelected((prev) => !prev)}>
      <div className={`dialog-button ${selected ? 'notdisabled' : ''}`}></div>
    </div>
  );
};

export default Togglebtn;
