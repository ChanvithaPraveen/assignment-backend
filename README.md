# User Management System - Backend

This is the backend API for the **User Management System**. It is built with **Node.js**, **Express**, and **MongoDB**. This API handles user authentication, user management (create, update, delete), and other essential functionalities required by the frontend.

## Features

- **User Authentication**: Handles user registration, login, and JWT-based authentication.
- **User Management**: Allows admin users to create, update, and delete user accounts.
- **Role-based Access**: Ensures only admins can access certain routes like creating and deleting users.
- **Security**: Passwords are securely hashed with bcrypt, and JWTs are used for authentication.
- **MongoDB**: All user data and authentication details are stored in MongoDB.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **JWT**: JSON Web Tokens for user authentication and session management.
- **bcryptjs**: Library for hashing passwords.
- **dotenv**: For environment variable management.
- **Mongoose**: MongoDB object modeling library.
- **Cors**: For enabling Cross-Origin Resource Sharing.
- **jsonwebtoken**: For generating and verifying JWT tokens.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.x or higher)
- **npm** (Package Manager)
- **MongoDB** (locally or using a cloud service like MongoDB Atlas)

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/ChanvithaPraveen/assignment-backend.git
cd assignment-backend
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

This will install all the necessary packages listed in `package.json`.

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
PORT=5000
MONGO_URI=""
JWT_SECRET=""
```

- `MONGO_URI`: The URI of your MongoDB instance (can be a local or MongoDB Atlas URL).
- `JWT_SECRET`: A secret key used to sign JWT tokens (keep it secure).
- `PORT`: The port the server will run on (default is `5000`).

### 4. Start the Development Server

Run the following command to start the server:

```bash
npm start
```

This will launch the server at `http://localhost:5000`.

### 5. Running Tests

To run the tests for the backend, you can use the following command:

```bash
npm test
```

This will run all the test cases defined in the project using Jest.

## Scripts

- `npm start` – Starts the backend server.
- `npm run dev` – Starts the server in development mode with hot reloading.
- `npm test` – Runs tests using Jest.
- `npm run lint` – Runs ESLint to check for code quality issues.

## Security

- **Password Hashing**: All passwords are hashed using bcrypt before storing them in the database.
- **JWT Authentication**: A secure JWT token is used for user authentication. The token should be included in the `Authorization` header when accessing protected routes.
