# QR Code API

A lightweight QR code generation API service designed for Vercel deployment.

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftimetetng%2Fqrcode-api)

## Features

- 🚀 **Fast & Simple**: Generate QR codes instantly via REST API
- 📦 **Zero Dependencies**: Minimal package size with only essential dependencies
- ☁️ **Serverless Ready**: Optimized for Vercel serverless functions
- 🎯 **Easy Integration**: Simple API endpoints for quick integration

## Tech Stack

- Node.js
- [qrcode](https://github.com/soldair/node-qrcode) library for QR generation

## Quick Start

### Deploy to Vercel

1. Click the **Deploy with Vercel** button above
2. Fork this repository
3. Import the project to Vercel
4. Deploy - that's it! No additional configuration needed

Your API will be available at: `https://your-project.vercel.app/api/generate`

## API Usage

### Generate QR Code

Send a GET request to generate QR codes:

```
GET /api/generate?url=https://example.com
```

### Parameters

- `url` (required): The URL or text to encode in the QR code

### Example Response

The API returns a PNG image with your QR code that can be displayed directly or downloaded.

## Usage Examples

### Browser/HTML

```html
<img src="https://your-project.vercel.app/api/generate?url=https://google.com" alt="QR Code" />
```

### JavaScript/Fetch

```javascript
// Generate QR code and display as image
const generateQR = async (url) => {
  const response = await fetch(`https://your-project.vercel.app/api/generate?url=${encodeURIComponent(url)}`);
  const blob = await response.blob();
  
  // Create image element
  const img = document.createElement('img');
  img.src = URL.createObjectURL(blob);
  document.body.appendChild(img);
};

// Usage
generateQR('https://google.com');
```

### cURL

```bash
# Download QR code as image
curl -o qrcode.png "https://your-project.vercel.app/api/generate?url=https://google.com"
```

### Python

```python
import requests

def generate_qr(url, filename='qrcode.png'):
    api_url = 'https://your-project.vercel.app/api/generate'
    params = {'url': url}
    
    response = requests.get(api_url, params=params)
    response.raise_for_status()
    
    with open(filename, 'wb') as f:
        f.write(response.content)
    
    print(f'QR code saved as {filename}')

# Usage
generate_qr('https://google.com')
```

### Node.js

```javascript
const fs = require('fs');
const https = require('https');

function generateQR(url, filename) {
  const apiUrl = `https://your-project.vercel.app/api/generate?url=${encodeURIComponent(url)}`;
  
  https.get(apiUrl, (response) => {
    const writeStream = fs.createWriteStream(filename);
    response.pipe(writeStream);
    
    writeStream.on('finish', () => {
      writeStream.close();
      console.log(`QR code saved as ${filename}`);
    });
  });
}

// Usage
generateQR('https://google.com', 'qrcode.png');
```

## Installation

```bash
npm install
```

## License

ISC

---

Made with ❤️ for easy QR code generation