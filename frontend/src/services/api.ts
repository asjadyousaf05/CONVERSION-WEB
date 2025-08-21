import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const convertDocument = async (file: File, targetFormat: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetFormat', targetFormat);

    const response = await axios.post(`${API_BASE_URL}/convert/document`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export const convertImage = async (file: File, targetFormat: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetFormat', targetFormat);

    const response = await axios.post(`${API_BASE_URL}/convert/image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export const convertVideo = async (file: File, targetFormat: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetFormat', targetFormat);

    const response = await axios.post(`${API_BASE_URL}/convert/video`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export const convertAudio = async (file: File, targetFormat: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('targetFormat', targetFormat);

    const response = await axios.post(`${API_BASE_URL}/convert/audio`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};

export const convertTextCase = (text: string, caseType: 'upper' | 'lower' | 'title') => {
    return axios.post(`${API_BASE_URL}/convert/text-case`, { text, caseType });
};

export const convertFileSize = (size: number, fromUnit: string, toUnit: string) => {
    return axios.post(`${API_BASE_URL}/convert/file-size`, { size, fromUnit, toUnit });
};

export async function postUtil(tool: string, payload: any) {
  const res = await fetch('/api/misc/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tool, payload })
  });
  return res.json();
}