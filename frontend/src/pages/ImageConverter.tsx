import React, { useState } from 'react';
import FileUploader from '../components/FileUploader';
import ConverterControls from '../components/ConverterControls';
import ResultViewer from '../components/ResultViewer';
import { convertImage } from '../services/api';

const ImageConverter = () => {
    const [file, setFile] = useState<File | null>(null);
    const [conversionType, setConversionType] = useState<string>('JPG to PNG');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (selectedFile: File) => {
        setFile(selectedFile);
        setResult(null);
        setError(null);
    };

    const handleConversion = async () => {
        if (!file) {
            setError('Please upload a file to convert.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const convertedFile = await convertImage(file, conversionType);
            setResult(URL.createObjectURL(convertedFile));
        } catch (err) {
            setError('Conversion failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="image-converter">
            <h1>Image Converter</h1>
            <FileUploader onFileChange={handleFileChange} />
            <ConverterControls
                conversionOptions={['JPG to PNG', 'PNG to JPG', 'JPG to WebP', 'WebP to JPG', 'SVG to PNG', 'PNG to SVG']}
                selectedOption={conversionType}
                onOptionChange={setConversionType}
                onConvert={handleConversion}
                loading={loading}
            />
            {error && <p className="error">{error}</p>}
            {result && <ResultViewer fileUrl={result} />}
        </div>
    );
};

export default ImageConverter;