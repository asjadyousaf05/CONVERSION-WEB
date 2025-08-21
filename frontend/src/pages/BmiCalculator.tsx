import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function BmiCalculator() {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('170');
  const [out, setOut] = useState<any>(null);

  async function run() {
    const res = await postUtil('bmi.calculate', { weightKg: weight, heightCm: height });
    setOut(res.result ?? res);
  }

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <label>Weight (kg): <input value={weight} onChange={e => setWeight(e.target.value)} style={{ width: 90 }} /></label>
        <label>Height (cm): <input value={height} onChange={e => setHeight(e.target.value)} style={{ width: 90 }} /></label>
        <button onClick={run}>Calculate</button>
      </div>
      <pre style={{ marginTop: 12 }}>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}