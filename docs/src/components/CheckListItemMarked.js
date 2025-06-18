import React, { useState } from 'react';

export default function ChecklistItemMarked({ children }) {
  const [checked, setChecked] = useState(true); // marcado por padrão

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={{ marginRight: '0.5rem' }}
        />
        {children}
      </label>
    </div>
  );
}
