#!/bin/bash

# Start the backend server
cd backend
npm install
npm run dev &

# Start the frontend application
cd ../frontend
npm install
npm run dev &

# Wait for both processes to finish
wait