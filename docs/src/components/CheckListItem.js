import React, { useState } from 'react';

export default function ChecklistItem({ children }) {
  const [checked, setChecked] = useState(false);

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
