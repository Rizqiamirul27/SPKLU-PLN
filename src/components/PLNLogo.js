import React from 'react';

function PLNLogo({ style, size = 60 }) {
  return (
    <svg width={size * 2.7} height={size} viewBox="0 0 270 100" style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Kotak kuning */}
      <rect x="0" y="0" width="100" height="100" fill="#ffe44d" />
      {/* Tiga gelombang biru */}
      <path d="M20 35 Q35 40 50 35 Q65 30 80 35" stroke="#009fe3" strokeWidth="6" fill="none" />
      <path d="M20 50 Q35 55 50 50 Q65 45 80 50" stroke="#009fe3" strokeWidth="6" fill="none" />
      <path d="M20 65 Q35 70 50 65 Q65 60 80 65" stroke="#009fe3" strokeWidth="6" fill="none" />
      {/* Petir merah */}
      <polyline points="55,15 45,55 65,55 50,90" fill="none" stroke="#e30613" strokeWidth="10" strokeLinejoin="round" />
      {/* Tulisan PLN Icon Plus */}
      <text x="110" y="50" fontFamily="'Bebas Neue', Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="48" fill="#009fe3">PLN</text>
      <text x="110" y="85" fontFamily="'Bebas Neue', Arial, Helvetica, sans-serif" fontSize="32" fill="#3a4a5e">Icon Plus</text>
    </svg>
  );
}

export default PLNLogo; 