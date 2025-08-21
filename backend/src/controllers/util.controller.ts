import { Request, Response } from 'express';
import * as misc from '../services/misc.service';

const toolMap: Record<string, Function> = {
  'color.hexToRgb': misc.hexToRgb,
  'color.rgbToHex': misc.rgbToHex,
  'color.rgbToHsl': misc.rgbToHsl,
  'color.hslToRgb': misc.hslToRgb,
  'ascii.textToAscii': misc.textToAscii,
  'ascii.asciiToText': misc.asciiToText,
  'dataSpeed.convert': misc.convertDataSpeed,
  'timestamp.unixToHuman': misc.unixToHuman,
  'timestamp.humanToUnix': misc.humanToUnix,
  'textCase.convert': misc.convertTextCase,
  'fileSize.convert': misc.convertFileSize,
  'bmi.calculate': misc.calculateBmi,
  'age.calculate': misc.calculateAge,
  'roman.toRoman': misc.toRoman,
  'roman.fromRoman': misc.fromRoman,
  'numberSystem.convert': misc.convertNumberSystem,
  'percentage.convert': misc.convertPercentage,
  'timezone.convert': misc.convertTimezone
};

export async function miscConvert(req: Request, res: Response) {
  try {
    const { tool, payload } = req.body;
    if (!tool) return res.status(400).json({ error: 'tool required' });
    const fn = toolMap[tool];
    if (!fn) return res.status(400).json({ error: 'unknown tool' });
    const result = await Promise.resolve(fn(payload));
    return res.json({ result });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || String(err) });
  }
}