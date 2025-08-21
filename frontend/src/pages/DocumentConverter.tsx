import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import ConverterControls from '../components/ConverterControls';
import ResultViewer from '../components/ResultViewer';
import { convertDocument } from '../services/api';

const DocumentConverter: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('pdf-to-word');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (selectedFile: File | null) => {
        setFile(selectedFile);
    };

    const handleConversionTypeChange = (type: string) => {
        setConversionType(type);
    };

    const handleConvert = async () => {
        if (!file) {
            setError('Please upload a file to convert.');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            const convertedFile = await convertDocument(file, conversionType);
            setResult(convertedFile);
        } catch (err) {
            setError('Conversion failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Document Converter</h1>
            <FileUploader onFileChange={handleFileChange} />
            <ConverterControls
                conversionType={conversionType}
                onConversionTypeChange={handleConversionTypeChange}
                onConvert={handleConvert}
                loading={loading}
            />
            {error && <p className="error">{error}</p>}
            {result && <ResultViewer result={result} />}
        </div>
    );
};

export default DocumentConverter;