import React from 'react';
import './Popup.scss';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <div className="popup-header">
          {title && <h2 className="popup-title">{title}</h2>}
          <button className="popup-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="popup-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;