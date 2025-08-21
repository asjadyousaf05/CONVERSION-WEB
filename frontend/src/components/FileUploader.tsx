import React, { useState } from 'react';

const FileUploader: React.FC<{ onFileUpload: (file: File) => void }> = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            onFileUpload(selectedFile);
            setSelectedFile(null);
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={!selectedFile}>
                Upload
            </button>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
    );
};

export default FileUploader;