import React, { useState } from 'react';
import { postUtil } from '../services/api';

export default function AsciiConverter() {
  const [text, setText] = useState('Hello');
  const [res, setRes] = useState('');
  async function textToAscii() { const r = await postUtil('ascii.textToAscii', text); setRes(JSON.stringify(r.result)); }
  async function asciiToText() { const r = await postUtil('ascii.asciiToText', text); setRes(JSON.stringify(r.result)); }

  return (
    <div>
      <h2>Text ⇄ ASCII</h2>
      <textarea rows={3} value={text} onChange={e => setText(e.target.value)} style={{ width: '100%' }} />
      <div style={{ marginTop: 8 }}>
        <button onClick={textToAscii}>Text → ASCII</button>
        <button onClick={asciiToText} style={{ marginLeft: 8 }}>ASCII → Text</button>
      </div>
      <pre>{res}</pre>
    </div>
  );
}