// This file defines custom TypeScript types used throughout the backend.

export type FileType = 'pdf' | 'word' | 'excel' | 'powerpoint' | 'jpg' | 'png' | 'webp' | 'svg' | 'mp4' | 'avi' | 'mov' | 'mkv' | 'mp3' | 'wav' | 'aac';

export interface ConversionRequest {
    fileType: FileType;
    targetType: FileType;
    file: Buffer; // The file data as a Buffer
}

export interface ConversionResponse {
    success: boolean;
    message: string;
    convertedFile?: Buffer; // The converted file data as a Buffer
}

export interface TextCaseConversionRequest {
    text: string;
    caseType: 'upper' | 'lower' | 'title';
}

export interface FileSizeConversionRequest {
    size: number; // Size in MB
    fromUnit: 'MB' | 'GB' | 'KB' | 'TB';
    toUnit: 'MB' | 'GB' | 'KB' | 'TB';
}

export interface FileSizeConversionResponse {
    convertedSize: number; // Converted size in the target unit
}