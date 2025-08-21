# Universal Converter

## Overview
The Universal Converter is a web application that allows users to convert various file types, including documents, images, videos, audio files, text cases, and file sizes. The application is built with a backend using TypeScript and Express, and a frontend using React.

## Features
- **Document Conversion**: Convert PDF files to Word, Excel, and PowerPoint formats.
- **Image Conversion**: Convert images between JPG, PNG, WebP, and SVG formats.
- **Video Conversion**: Convert videos between MP4, AVI, MOV, and MKV formats.
- **Audio Conversion**: Convert audio files between MP3, WAV, and AAC formats.
- **Text Case Conversion**: Convert text to UPPER case, lower case, and Title Case.
- **File Size Conversion**: Convert file sizes between MB, GB, KB, and TB.

## Project Structure
```
universal-converter
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── scripts
│   ├── start-dev.sh
│   └── setup-ffmpeg-libreoffice.sh
├── docker-compose.yml
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd universal-converter
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` and configure as needed.

## Running the Application
To run the application in development mode, use the following command:

1. Start the backend server:
   ```
   cd backend
   npm run dev
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

3. Access the application in your browser at `http://localhost:3000`.

## Docker
To run the application using Docker, use the following command:
```
docker-compose up --build
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.