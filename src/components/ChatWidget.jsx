// src/components/ChatWidget.jsx
import React from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/facebook.png" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/instagram.png" alt="Instagram" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <img src="/assets/icons/whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default ChatWidget;
