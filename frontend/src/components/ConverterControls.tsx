import React from 'react';

const ConverterControls: React.FC<{ onConvert: (type: string, format: string) => void }> = ({ onConvert }) => {
    const [conversionType, setConversionType] = React.useState<string>('document');
    const [format, setFormat] = React.useState<string>('pdf');

    const handleConvert = () => {
        onConvert(conversionType, format);
    };

    return (
        <div className="converter-controls">
            <h2>File Converter</h2>
            <div>
                <label htmlFor="conversion-type">Select Conversion Type:</label>
                <select
                    id="conversion-type"
                    value={conversionType}
                    onChange={(e) => setConversionType(e.target.value)}
                >
                    <option value="document">Document (PDF)</option>
                    <option value="image">Image (JPG, PNG, etc.)</option>
                    <option value="video">Video (MP4, AVI, etc.)</option>
                    <option value="audio">Audio (MP3, WAV, etc.)</option>
                    <option value="text-case">Text Case</option>
                    <option value="file-size">File Size</option>
                </select>
            </div>
            <div>
                <label htmlFor="format">Select Format:</label>
                <select
                    id="format"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                >
                    {conversionType === 'document' && (
                        <>
                            <option value="pdf">PDF</option>
                            <option value="word">Word</option>
                            <option value="excel">Excel</option>
                            <option value="powerpoint">PowerPoint</option>
                        </>
                    )}
                    {conversionType === 'image' && (
                        <>
                            <option value="jpg">JPG</option>
                            <option value="png">PNG</option>
                            <option value="webp">WebP</option>
                            <option value="svg">SVG</option>
                        </>
                    )}
                    {conversionType === 'video' && (
                        <>
                            <option value="mp4">MP4</option>
                            <option value="avi">AVI</option>
                            <option value="mov">MOV</option>
                            <option value="mkv">MKV</option>
                        </>
                    )}
                    {conversionType === 'audio' && (
                        <>
                            <option value="mp3">MP3</option>
                            <option value="wav">WAV</option>
                            <option value="aac">AAC</option>
                        </>
                    )}
                    {conversionType === 'text-case' && (
                        <>
                            <option value="upper">UPPER CASE</option>
                            <option value="lower">lower case</option>
                            <option value="title">Title Case</option>
                        </>
                    )}
                    {conversionType === 'file-size' && (
                        <>
                            <option value="mb">MB</option>
                            <option value="gb">GB</option>
                            <option value="kb">KB</option>
                            <option value="tb">TB</option>
                        </>
                    )}
                </select>
            </div>
            <button onClick={handleConvert}>Convert</button>
        </div>
    );
};

export default ConverterControls;