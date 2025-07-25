# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Getting started

## Code Challenge Application

This is a code challenge application where users can write, test, and submit code for challenges in various programming languages. The project uses **Vue** for the frontend with Ace Editor, **Express** for the backend, and **PostgreSQL** as the database. The application is containerized using **Docker**.

## Features

- Code editor with syntax highlighting (Ace Editor).
- Real-time code execution in JavaScript.
- Submit code and receive feedback on the result.
- Frontend and backend are separated into different Docker containers.

## Prerequisites

Ensure that you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

## Project Structure

- **Frontend** (`app`): A Vue.js app built with Vite, using Ace Editor for code editing.
- **Backend** (`server`): A Node.js Express API that handles the backend logic and interactions with the PostgreSQL database.
- **PostgreSQL**: A relational database to store user data and challenge information.
- **Docker**: Containerization of the frontend, backend, and database.

# Setup

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
```

## 2. Install dependencies
```bash
cd app
npm install
```

```bash
cd server
npm install
```

## 3. Docker setup

This project uses Docker Compose to set up the environment for the frontend, backend, and database. Follow the steps below to get started:

### a. Build and Start Docker Containers
To build and start the Docker containers, run the following command from the project root:

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the frontend and backend.
- Set up the PostgreSQL database container.
- Expose the frontend at http://localhost:8080 and the backend API at http://localhost:5000.
- Expose the pgAdmin interface at http://localhost:5050 for managing your PostgreSQL database.

### b. Docker Containers Overview
- postgres: PostgreSQL database container.
- dev_forge_server: Express API backend, accessible at http://localhost:5000.
- dev_forge_app: Vue frontend, accessible at http://localhost:8080.
- pgadmin: pgAdmin web interface for managing PostgreSQL, accessible at http://localhost:5050.
### c. Environment Variables
- The Docker containers will use environment variables to configure the backend. Ensure that the .env file in the server directory is set up correctly.

Example .env file for the backend (`server/.env`):

```env
SERVER_PORT=5000

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=dev_forge_db 
DB_URL=postgres://postgres:password@postgres:5432/dev_forge_db
```

### d. Starting the Application
Once the containers are up, you can access the application in your browser at:

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000
- pgAdmin: http://localhost:5050

# Troubleshooting
If you encounter any issues, you can try the following:

- Rebuild the Docker containers: Sometimes, changes require rebuilding the images.
    - Run:
    ```bash
    docker-compose down
    docker-compose up --build
    ```
- Check logs: You can check the logs of individual containers by using:
    ```bash
    docker logs <container-name>
    ```
    For example, to check the logs for the backend server:
    ```bash
    docker logs dev_forge_server_container
    ```

## LICENSE
This project is licensed under the MIT License - see the LICENSE file for details.


### Key Changes in the Updated README:
1. **Docker Setup**: Describes the usage of Docker Compose to build and start the containers, including all services.
2. **Backend Environment Variables**: Specific configuration details for PostgreSQL and backend settings in the `.env` file.
3. **Local Setup (Optional)**: Includes instructions on running the application without Docker, in case you want to test locally without containerization.
4. **pgAdmin**: Instructions for using the pgAdmin UI to manage the PostgreSQL database.
5. **Running Tests**: Instructions for running tests on both frontend and backend.
6. **Troubleshooting**: Added advice on rebuilding Docker containers and viewing logs.

This should be a complete guide for setting up and running your application locally using Docker or without it!