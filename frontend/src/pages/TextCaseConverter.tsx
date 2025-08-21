import React, { useState } from 'react';

const TextCaseConverter: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    const [caseType, setCaseType] = useState<'upper' | 'lower' | 'title'>('upper');

    const handleConvert = () => {
        let result = '';
        switch (caseType) {
            case 'upper':
                result = inputText.toUpperCase();
                break;
            case 'lower':
                result = inputText.toLowerCase();
                break;
            case 'title':
                result = inputText
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                break;
            default:
                break;
        }
        setConvertedText(result);
    };

    return (
        <div>
            <h1>Text Case Converter</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text here"
            />
            <div>
                <label>
                    <input
                        type="radio"
                        value="upper"
                        checked={caseType === 'upper'}
                        onChange={() => setCaseType('upper')}
                    />
                    UPPER CASE
                </label>
                <label>
                    <input
                        type="radio"
                        value="lower"
                        checked={caseType === 'lower'}
                        onChange={() => setCaseType('lower')}
                    />
                    lower case
                </label>
                <label>
                    <input
                        type="radio"
                        value="title"
                        checked={caseType === 'title'}
                        onChange={() => setCaseType('title')}
                    />
                    Title Case
                </label>
            </div>
            <button onClick={handleConvert}>Convert</button>
            <h2>Converted Text:</h2>
            <p>{convertedText}</p>
        </div>
    );
};

export default TextCaseConverter;