import React, { useState } from 'react';
import DocumentConverter from './pages/DocumentConverter';
import ImageConverter from './pages/ImageConverter';act-router-dom';
import VideoConverter from './pages/VideoConverter';rter';
import AudioConverter from './pages/AudioConverter';
import FileSizeConverter from './pages/FileSizeConverter';
import TextCaseConverter from './pages/TextCaseConverter';

import ColorConverter from './pages/ColorConverter';import FileSizeConverter from './pages/FileSizeConverter';
import AsciiConverter from './pages/AsciiConverter';
import DataSpeedConverter from './pages/DataSpeedConverter'; React.FC = () => {
import TimestampConverter from './pages/TimestampConverter';
import YoutubeToMp3 from './pages/YoutubeToMp3';
import BmiCalculator from './pages/BmiCalculator';
import AgeCalculator from './pages/AgeCalculator';er} />
import RomanConverter from './pages/RomanConverter';
import NumberSystemConverter from './pages/NumberSystemConverter';
import PercentageConverter from './pages/PercentageConverter';
import TimezoneConverter from './pages/TimezoneConverter';
e-converter" component={FileSizeConverter} />
const pages: Record<string, React.FC> = {
  DocumentConverter, ImageConverter, VideoConverter, AudioConverter,lcome to the Universal Converter</h1>
  FileSizeConverter, TextCaseConverter,>
  ColorConverter, AsciiConverter, DataSpeedConverter, TimestampConverter, YoutubeToMp3,h>
  BmiCalculator, AgeCalculator, RomanConverter, NumberSystemConverter, PercentageConverter, TimezoneConverter</Router>
};);
};
export default function App() {


















}  );    </div>      </main>        </div>          <Page />        <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>      <main style={{ marginTop: 20 }}>      </header>        </select>          {Object.keys(pages).map(k => <option key={k} value={k}>{k.replace(/([A-Z])/g, ' $1').trim()}</option>)}        <select value={active} onChange={e => setActive(e.target.value)}>        <h1>Universal Converter</h1>      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 20, fontFamily: 'Inter, Arial' }}>  return (  const Page = pages[active];  const [active, setActive] = useState(Object.keys(pages)[0]);export default App;