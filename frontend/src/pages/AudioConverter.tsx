import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import ConverterControls from '../components/ConverterControls';
import ResultViewer from '../components/ResultViewer';
import { convertAudio } from '../services/api';

const AudioConverter = () => {
    const [file, setFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('mp3');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileChange = (selectedFile: File) => {
        setFile(selectedFile);
    };

    const handleConversionTypeChange = (type: string) => {
        setConversionType(type);
    };

    const handleConvert = async () => {
        if (!file) return;

        setLoading(true);
        setResult(null);

        try {
            const convertedFile = await convertAudio(file, conversionType);
            setResult(convertedFile);
        } catch (error) {
            console.error('Conversion failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Audio Converter</h1>
            <FileUploader onFileChange={handleFileChange} />
            <ConverterControls 
                conversionType={conversionType} 
                onConversionTypeChange={handleConversionTypeChange} 
                onConvert={handleConvert} 
                loading={loading} 
            />
            <ResultViewer result={result} />
        </div>
    );
};

export default AudioConverter;