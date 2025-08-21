import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function NumberSystemConverter() {
  const [value, setValue] = useState('1010');
  const [from, setFrom] = useState('2');
  const [to, setTo] = useState('10');
  const [out, setOut] = useState<any>(null);

  async function run() {
    const res = await postUtil('numberSystem.convert', { value, from, to });
    setOut(res.result ?? res);
  }

  return (
    <div>
      <h2>Number System Converter</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={value} onChange={e => setValue(e.target.value)} style={{ width: 140 }} />
        <label>from <input value={from} onChange={e => setFrom(e.target.value)} style={{ width: 48 }} /></label>
        <label>to <input value={to} onChange={e => setTo(e.target.value)} style={{ width: 48 }} /></label>
        <button onClick={run}>Convert</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}