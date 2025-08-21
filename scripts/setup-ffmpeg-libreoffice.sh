#!/bin/bash

# Update package list and install FFmpeg
sudo apt update
sudo apt install -y ffmpeg

# Install LibreOffice
sudo apt install -y libreoffice

# Verify installations
ffmpeg -version
libreoffice --version

echo "FFmpeg and LibreOffice have been successfully installed."