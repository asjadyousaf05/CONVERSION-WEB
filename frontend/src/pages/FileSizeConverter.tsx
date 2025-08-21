import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import ConverterControls from '../components/ConverterControls';
import ResultViewer from '../components/ResultViewer';
import { convertFileSize } from '../services/api';

const FileSizeConverter = () => {
    const [fileSize, setFileSize] = useState('');
    const [unit, setUnit] = useState('MB');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleConvert = async () => {
        try {
            const convertedSize = await convertFileSize(fileSize, unit);
            setResult(convertedSize);
            setError('');
        } catch (err) {
            setError('Conversion failed. Please check your input.');
            setResult(null);
        }
    };

    return (
        <div>
            <h1>File Size Converter</h1>
            <FileUploader onFileUpload={setFileSize} />
            <ConverterControls 
                onConvert={handleConvert} 
                setUnit={setUnit} 
                unit={unit} 
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && <ResultViewer result={result} />}
        </div>
    );
};

export default FileSizeConverter;