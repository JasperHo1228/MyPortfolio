import React from 'react';
import '../style/navbar.css';

function Overlay({ isActive }) {
  const overlayClass = isActive ? 'active' : isActive === false ? 'close' : '';
  return (
    <div className={`overlay ${overlayClass}`} />
  );
}

export default Overlay;
