import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function DataSpeedConverter() {
  const [value, setValue] = useState('100');
  const [from, setFrom] = useState('Mbps');
  const [to, setTo] = useState('MB/s');
  const [out, setOut] = useState('');
  async function run() {
    const r = await postUtil('dataSpeed.convert', { value, from, to });
    setOut(JSON.stringify(r.result));
  }
  return (
    <div>
      <h2>Data Speed (Mbps ⇄ MB/s ⇄ Gbps)</h2>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <select value={from} onChange={e => setFrom(e.target.value)}><option>Mbps</option><option>MB/s</option><option>Gbps</option></select>
      <span> → </span>
      <select value={to} onChange={e => setTo(e.target.value)}><option>MB/s</option><option>Mbps</option><option>Gbps</option></select>
      <button onClick={run}>Convert</button>
      <pre>{out}</pre>
    </div>
  );
}