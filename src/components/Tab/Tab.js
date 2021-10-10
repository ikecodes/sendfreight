import React, { useState } from 'react';

import './Tab.css';
const Tab = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div className='tab-container'>
      <div className={`tab-button ${selected ? '' : 'notdisabled'}`} onClick={() => setSelected((prev) => !prev)}>
        Total Dimension
      </div>
      <div className={`tab-button ${selected ? 'notdisabled' : ''}`} onClick={() => setSelected((prev) => !prev)}>
        Package Details
      </div>
    </div>
  );
};

export default Tab;
