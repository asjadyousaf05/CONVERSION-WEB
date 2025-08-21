import React from 'react';

interface ResultViewerProps {
    result: string | null;
    error: string | null;
}

const ResultViewer: React.FC<ResultViewerProps> = ({ result, error }) => {
    return (
        <div className="result-viewer">
            {error ? (
                <div className="error-message">
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            ) : (
                <div className="result-message">
                    <h2>Conversion Result</h2>
                    {result ? (
                        <a href={result} download>
                            Download Converted File
                        </a>
                    ) : (
                        <p>No result available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ResultViewer;