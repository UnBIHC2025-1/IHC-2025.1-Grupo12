import React, { useState } from 'react';

export default function Expandable({ label = 'Descrição', children }) {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setShow(!show)}
        style={{
          backgroundColor: '#3f51b5',
          color: 'white',
          padding: '0.4rem 0.8rem',
          borderRadius: '0.5rem',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
        }}
      >
        {label} 📖
      </button>

      {show && (
        <div style={{ marginTop: '1rem' }}>
          {children}
        </div>
      )}
    </div>
  );
}
