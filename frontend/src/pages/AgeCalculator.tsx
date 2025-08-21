import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function AgeCalculator() {
  const [dob, setDob] = useState('1990-01-01');
  const [out, setOut] = useState<any>(null);

  async function run() {
    const res = await postUtil('age.calculate', { dob });
    setOut(res.result ?? res);
  }

  return (
    <div>
      <h2>Age Calculator</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        <button onClick={run}>Calculate</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}