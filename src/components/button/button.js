import React from 'react';
import './Button.css'; // Stil dosyasını burada da ekleyebilirsiniz

const Button = ({ text, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
