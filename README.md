# Task Manager Backend

This is the backend for the Task Manager app, built with Node.js, Express, and MongoDB.

## Features
- User authentication (JWT)
- Task CRUD operations
- Secure password handling

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akashApie/task-manager-backend.git
   cd task-manager-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   MONGO_URI=mongodb+srv://akashpatra:patraAkash@cluster0.bfmcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET="task_manager"
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| POST   | `/auth/signup` | Register a new user  |
| POST   | `/auth/login` | Authenticate a user    |
| POST   | `/tasks/getAll` | Get all tasks (auth required) |
| POST   | `/tasks` | Create a task (auth required) |
| PUT    | `/tasks/:id` | Update a task (auth required) |
| DELETE | `/tasks/:id` | Delete a task (auth required) |

## License
This project is licensed under the MIT License.


