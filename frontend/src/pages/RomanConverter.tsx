import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function RomanConverter() {
  const [value, setValue] = useState('2023');
  const [out, setOut] = useState<any>(null);

  async function toRoman() { const r = await postUtil('roman.toRoman', Number(value)); setOut(r.result ?? r); }
  async function fromRoman() { const r = await postUtil('roman.fromRoman', value); setOut(r.result ?? r); }

  return (
    <div>
      <h2>Roman ⇄ Number</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={toRoman}>→ Roman</button>
        <button onClick={fromRoman}>→ Number</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}