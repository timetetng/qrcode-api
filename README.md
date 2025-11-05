# QR Code API

A lightweight QR code generation API service designed for Vercel deployment.

## Features

- 🚀 **Fast & Simple**: Generate QR codes instantly via REST API
- 📦 **Zero Dependencies**: Minimal package size with only essential dependencies
- ☁️ **Serverless Ready**: Optimized for Vercel serverless functions
- 🎯 **Easy Integration**: Simple API endpoints for quick integration

## Tech Stack

- Node.js
- [qrcode](https://github.com/soldair/node-qrcode) library for QR generation

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/timetetng/qrcode-api.git
cd qrcode-api
```

2. Install dependencies:
```bash
npm install
```

3. Deploy to Vercel:
```bash
vercel --prod
```

## API Usage

### Generate QR Code

Send a GET or POST request to generate QR codes:

```
GET/POST /api/generate?text=your-data-here
```

### Parameters

- `text` (required): The data to encode in the QR code
- Additional customization options can be added as needed

### Example Response

The API returns a QR code image that can be displayed directly or downloaded.

## Installation

```bash
npm install
```

## License

ISC

---

Made with ❤️ for easy QR code generation