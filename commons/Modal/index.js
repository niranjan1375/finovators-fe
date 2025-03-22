import React from 'react';
import styles from  './styles.module.css';

const Modal = ({ isOpen, title, children, onClose }) => {
  return (
    <div className={`${styles.modal_overlay} ${isOpen ? styles.open : ''}`}>
      <div className={styles.modal_body}>
        <div className={styles.modal_header}>
          <span>{title}</span>
          <button onClick={onClose} className="close_button">✖</button>
        </div>
        <div className={styles.modal_content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
