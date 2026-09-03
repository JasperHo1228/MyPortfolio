import '../style/navbar.css';

export const Overlay = ({ isActive }) => {
  const overlayClass = isActive ? 'active' : isActive === null ? '' : 'close';
  return (
    <div className={`overlay ${overlayClass}`} />
  );
}



