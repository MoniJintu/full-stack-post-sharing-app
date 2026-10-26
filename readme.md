# Full-Stack Post Sharing App

A full-stack web application that allows users to create posts by uploading images and adding captions. Built using React, Node.js, Express.js, MongoDB, and ImageKit.

## Features

- Upload images and add captions to create posts.
- Host uploaded images using ImageKit.
- View posts with images and captions in a feed.
- Store post information in MongoDB.
- Communicate between frontend and backend using Axios and REST APIs.
- Navigate between pages using React Router.

## Tech Stack

**Frontend**

- React
- JavaScript
- Axios
- React Router
- Tailwind CSS
- Vite

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

## Project Structure

```text
Post-Sharing-App/
├── Frontend-part/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── Backend(Node)/
│   ├── server.js
│   ├── package.json
│   └── server.js
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB or a MongoDB Atlas account
- An ImageKit account

### 1. Clone the Repository

```bash
git clone https://github.com/MoniJintu/full-stack-post-sharing-app.git
cd YOUR_REPOSITORY
```

### 2. Set Up the Backend

```bash
cd "Backend(Node)"
npm install
```

Create a `.env` file inside `Backend(Node)` and add the environment variables required by your backend:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Use the exact variable names expected by your code and replace the placeholder values with your own credentials.

Start the backend using the command configured in your `package.json`. For example:

```bash
npx nodemon server.js
```

### 3. Set Up the Frontend

Open another terminal from the project root:

```bash
cd Frontend-part
npm install
npm run dev
```

Open the local URL shown in your terminal, usually `http://localhost:5173`.

## How to Use

1. Open the application in your browser.
2. Navigate to the Create Post page.
3. Select an image from your device.
4. Enter a caption.
5. Submit the form.
6. View your post on the feed page.

## How It Works

1. React collects the image and caption from the user.
2. `FormData` packages the data for submission.
3. Axios sends the request to the Express backend.
4. Multer processes the uploaded image.
5. ImageKit hosts the image and provides an image URL.
6. MongoDB stores the post details through Mongoose.
7. The feed retrieves posts from the backend and displays them.

## Environment Variables and Security

Never upload your actual `.env` file or private API credentials to GitHub.

Add the following entries to your `.gitignore`:

```gitignore
node_modules/
dist/
.env
.env.*
!.env.example
```

## Future Improvements

- User authentication and authorization
- Like and comment functionality
- Edit and delete posts
- User profile pages
- Pagination and infinite scrolling

## Author

**Jintu Moni Nath**

- GitHub: MoniJintu

## License

This project is available under the MIT License if you choose to distribute it under that license.
