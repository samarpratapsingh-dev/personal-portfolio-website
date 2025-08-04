import React from "react";
import "../styles/modal.css";

const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>{title}</h2>
        <div className="modal-content">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
