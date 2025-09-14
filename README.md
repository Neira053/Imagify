# Imagify - AI Image Generation Application

![Imagify Logo]

## Overview

Imagify is a powerful web application that transforms text prompts into stunning images using AI technology. With an intuitive interface and seamless user experience, Imagify makes it easy to generate creative visuals from simple text descriptions.

## Features

- **Text-to-Image Generation**: Convert your text descriptions into high-quality images
- **User Authentication**: Secure login and registration system
- **Credit System**: Purchase credits to generate images
- **Responsive Design**: Beautiful UI that works on all devices
- **Image History**: View and download your previously generated images

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Motion (for animations)
- Tailwind CSS
- Axios
- React Toastify

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- ClipDrop API Integration

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB account
- ClipDrop API key

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/imagify.git
   cd imagify
   ```

2. Install dependencies for client
   ```
   cd client
   npm install
   ```

3. Install dependencies for server
   ```
   cd ../server
   npm install
   ```

4. Set up environment variables
   - Create a `.env` file in the server directory with the following variables:
     ```
     PORT=4000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLIPDROP_API=your_clipdrop_api_key
     ```
   - Create a `.env` file in the client directory with:
     ```
     VITE_API_URL=http://localhost:4000/api
     ```

5. Start the development servers
   - For the backend:
     ```
     cd server
     npm start
     ```
   - For the frontend:
     ```
     cd client
     npm run dev
     ```

6. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Register or log in to your account
2. Purchase credits if needed
3. Enter a text prompt describing the image you want to generate
4. Click the "Generate" button
5. View, download, or share your generated image

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   └── src/                # Source files
│       ├── assets/         # Static assets
│       ├── components/     # React components
│       ├── context/        # Context API
│       └── pages/          # Page components
└── server/                 # Backend Node.js application
    ├── config/             # Configuration files
    ├── controllers/        # Request controllers
    ├── middlewares/        # Express middlewares
    ├── models/             # MongoDB models
    └── routes/             # API routes
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [ClipDrop API](https://clipdrop.co/apis) for image generation
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)





