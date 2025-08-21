import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function TimestampConverter() {
  const [ts, setTs] = useState(String(Math.floor(Date.now() / 1000)));
  const [human, setHuman] = useState(new Date().toISOString());
  const [out, setOut] = useState('');
  async function toHuman() { const r = await postUtil('timestamp.unixToHuman', Number(ts)); setOut(JSON.stringify(r.result)); }
  async function toUnix() { const r = await postUtil('timestamp.humanToUnix', human); setOut(JSON.stringify(r.result)); }
  return (
    <div>
      <h2>Unix Timestamp ⇄ Human Date</h2>
      <div><input value={ts} onChange={e => setTs(e.target.value)} /> <button onClick={toHuman}>→ Human</button></div>
      <div style={{ marginTop: 8 }}><input value={human} onChange={e => setHuman(e.target.value)} /> <button onClick={toUnix}>→ Unix</button></div>
      <pre>{out}</pre>
    </div>
  );
}