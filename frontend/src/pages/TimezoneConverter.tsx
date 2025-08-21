import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function TimezoneConverter() {
  const [iso, setIso] = useState(new Date().toISOString());
  const [fromOffset, setFromOffset] = useState('0');
  const [toOffset, setToOffset] = useState('-8');
  const [out, setOut] = useState<any>(null);

  async function run() {
    const res = await postUtil('timezone.convert', { isoString: iso, fromOffset, toOffset });
    setOut(res.result ?? res);
  }

  return (
    <div>
      <h2>Time Zone Converter</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={iso} onChange={e => setIso(e.target.value)} style={{ width: 420 }} />
        <label>from <input value={fromOffset} onChange={e => setFromOffset(e.target.value)} style={{ width: 60 }} /></label>
        <label>to <input value={toOffset} onChange={e => setToOffset(e.target.value)} style={{ width: 60 }} /></label>
        <button onClick={run}>Convert</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}