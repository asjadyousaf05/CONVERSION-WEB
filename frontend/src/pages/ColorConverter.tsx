import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function ColorConverter() {
  const [hex, setHex] = useState('#ff8800');
  const [out, setOut] = useState<any>(null);
  async function run() {
    const r = await postUtil('color.hexToRgb', hex);
    const hsl = r.result ? await postUtil('color.rgbToHsl', r.result) : null;
    setOut({ rgb: r.result, hsl: hsl?.result });
  }
  return (
    <div>
      <h2>Color (HEX ⇄ RGB ⇄ HSL)</h2>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <input value={hex} onChange={e => setHex(e.target.value)} />
        <button onClick={run}>Convert</button>
      </div>
      <pre>{JSON.stringify(out, null, 2)}</pre>
    </div>
  );
}