import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function PercentageConverter() {
  const [value, setValue] = useState('50');
  const [from, setFrom] = useState<'percent'|'decimal'|'fraction'>('percent');
  const [to, setTo] = useState<'percent'|'decimal'|'fraction'>('decimal');
  const [out, setOut] = useState<any>(null);

  async function run() {
    const res = await postUtil('percentage.convert', { value, from, to });
    setOut(res.result ?? res);
  }

  return (
    <div>
      <h2>Percentage ⇄ Fraction ⇄ Decimal</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <input value={value} onChange={e => setValue(e.target.value)} style={{ width: 120 }} />
        <select value={from} onChange={e => setFrom(e.target.value as any)}>
          <option value="percent">percent</option>
          <option value="decimal">decimal</option>
          <option value="fraction">fraction</option>
        </select>
        <span>→</span>
        <select value={to} onChange={e => setTo(e.target.value as any)}>
          <option value="decimal">decimal</option>
          <option value="percent">percent</option>
          <option value="fraction">fraction</option>
        </select>
        <button onClick={run}>Convert</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}