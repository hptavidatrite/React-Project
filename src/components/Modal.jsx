import React from 'react';

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button className='boton-cerrar-modal' onClick={onClose}>cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
