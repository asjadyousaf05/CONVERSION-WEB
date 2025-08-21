// ...new file...
export function hexToRgb(hex: string) {
  const clean = (hex || '').toString().replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) throw new Error('Invalid hex');
  const n = parseInt(clean, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function rgbToHex({ r, g, b }: any) {
  [r, g, b] = [r, g, b].map((v: any) => Number(v) || 0);
  return '#' + [r, g, b].map((x: number) => x.toString(16).padStart(2, '0')).join('');
}

export function rgbToHsl({ r, g, b }: any) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: +(s * 100).toFixed(1), l: +(l * 100).toFixed(1) };
}

export function hslToRgb({ h, s, l }: any) {
  const H = Number(h) / 360, S = Number(s) / 100, L = Number(l) / 100;
  function hue2rgb(p: number, q: number, t: number) {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  let r: number, g: number, b: number;
  if (S === 0) r = g = b = L;
  else {
    const q = L < 0.5 ? L * (1 + S) : L + S - L * S;
    const p = 2 * L - q;
    r = hue2rgb(p, q, H + 1 / 3);
    g = hue2rgb(p, q, H);
    b = hue2rgb(p, q, H - 1 / 3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export function textToAscii(text: string) {
  return (text || '').split('').map(c => c.charCodeAt(0)).join(' ');
}
export function asciiToText(codeStr: string) {
  return (codeStr || '').trim().split(/\s+/).map(n => String.fromCharCode(Number(n))).join('');
}

export function convertDataSpeed({ value, from, to }: any) {
  const v = Number(value);
  if (isNaN(v)) throw new Error('value must be number');
  const map: any = { 'Mbps': 1, 'MB/s': 8, 'Gbps': 1000 };
  const fromFactor = map[from] ?? 1;
  const toFactor = map[to] ?? 1;
  const mbps = v * fromFactor;
  return mbps / toFactor;
}

export function unixToHuman(ts: any) {
  const n = Number(ts);
  if (isNaN(n)) throw new Error('invalid timestamp');
  return new Date(n * 1000).toISOString();
}
export function humanToUnix(dateStr: string) {
  const ms = Date.parse(dateStr);
  if (isNaN(ms)) throw new Error('invalid date');
  return Math.floor(ms / 1000);
}

export function convertTextCase({ text, mode }: any) {
  const s = String(text || '');
  if (mode === 'UPPER') return s.toUpperCase();
  if (mode === 'lower') return s.toLowerCase();
  if (mode === 'Title') return s.toLowerCase().split(' ').map((w: string) => w ? w[0].toUpperCase() + w.slice(1) : '').join(' ');
  throw new Error('unknown mode');
}

export function convertFileSize({ value, from, to }: any) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const v = Number(value);
  if (isNaN(v)) throw new Error('value must be number');
  const fi = units.indexOf(from);
  const ti = units.indexOf(to);
  if (fi < 0 || ti < 0) throw new Error('invalid unit');
  const bytes = v * Math.pow(1024, fi);
  return bytes / Math.pow(1024, ti);
}

export function calculateBmi({ weightKg, heightCm }: any) {
  const w = Number(weightKg), h = Number(heightCm) / 100;
  if (isNaN(w) || isNaN(h) || h <= 0) throw new Error('invalid inputs');
  const bmi = w / (h * h);
  const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  return { bmi: +bmi.toFixed(2), category };
}

export function calculateAge({ dob }: any) {
  const d = new Date(dob);
  if (isNaN(d.getTime())) throw new Error('invalid dob');
  const now = new Date();
  const days = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365.2425);
  return { years, days };
}

const romanMap: [string, number][] = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
export function toRoman(num: any) {
  let n = Number(num);
  if (isNaN(n) || n <= 0 || n >= 4000) throw new Error('out of range');
  let res = '';
  for (const [sym, val] of romanMap) {
    while (n >= val) { res += sym; n -= val; }
  }
  return res;
}
export function fromRoman(s: string) {
  let i = 0; let value = 0; const str = (s || '').toUpperCase();
  for (const [sym, val] of romanMap) {
    while (str.slice(i, i + sym.length) === sym) { value += val; i += sym.length; }
  }
  return value;
}

export function convertNumberSystem({ value, from, to }: any) {
  const v = String(value);
  const dec = parseInt(v, Number(from));
  if (isNaN(dec)) throw new Error('invalid number for base ' + from);
  return dec.toString(Number(to));
}

export function convertPercentage({ value, from, to }: any) {
  const v = Number(value);
  if (isNaN(v)) throw new Error('invalid value');
  if (from === to) return v;
  if (from === 'percent' && to === 'decimal') return v / 100;
  if (from === 'percent' && to === 'fraction') return String(v / 100);
  if (from === 'decimal' && to === 'percent') return v * 100;
  if (from === 'fraction' && to === 'percent') return v * 100;
  if (from === 'decimal' && to === 'fraction') return String(v);
  throw new Error('unsupported conversion');
}

export function convertTimezone({ isoString, fromOffset, toOffset }: any) {
  const date = new Date(isoString || Date.now());
  const from = Number(fromOffset);
  const to = Number(toOffset);
  if (isNaN(from) || isNaN(to)) throw new Error('invalid offsets');
  const ms = date.getTime() + (to - from) * 3600 * 1000;
  return new Date(ms).toISOString();
}