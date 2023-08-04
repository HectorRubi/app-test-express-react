# Pokémon List - Dockerized Full Stack Web Application

[![GitHub tag](https://img.shields.io/github/tag/HectorRubi/HectorRubi?include_prereleases=&sort=semver&color=blue)](https://github.com/HectorRubi/HectorRubi/releases/)

[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

Welcome to the Pokémon List project! This repository contains the necessary files and configurations to set up a full-stack web application with a frontend, backend, and database, all managed using Docker Compose. The automation of various tasks is achieved through a Makefile.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- Make: [GNU Official Page](https://www.gnu.org/software/make/)

## Getting Started

1. **Clone this repository to your local machine:**

   ```bash
   git clone https://github.com/HectorRubi/app-test-express-react.git
   cd app-test-express-react
   ```

2. **Create .env files for the backend and frontend based on the provided examples:**

   - For the backend, create a .env file in the `server` directory and set the necessary database configuration variables:

     ```plaintext
     PORT=4024
     DB_HOST='db'
     DB_PORT=5432
     DB_USER='admin'
     DB_PASS='admin123'
     DB_NAME='pokemon'
     ```

   - For the frontend, create a .env file in the `app` directory and set the backend URL:

     ```plaintext
     REACT_APP_SERVER_HOST='http://localhost:4024'
     ```

3. Build and run the Docker containers using Docker Compose. From the project root directory, run:

   ```bash
   make start
   ```

   This command will start the frontend, backend, and database containers.

4. Access the application in your web browser:

   Open your browser and navigate to http://localhost:3000 to access the frontend of the application.

## Usage

The Dockerized Full Stack Web Application allows you to explore a list of Pokémon and interact with their details. Here's a step-by-step guide on how to use the application:

1. Accessing the Frontend:

   Open your web browser and navigate to http://localhost:3000 to access the frontend of the application.

2. Viewing the List of Pokémon:

   Upon loading the application, you will be greeted with the home page displaying a list of Pokémon. Each Pokémon shows its name and two buttons, view and save.

3. Viewing Pokémon Details:

   Click on view button to open a modal window with detailed information about the selected Pokémon. The modal displays data such as its abilities, height, weight, and any other relevant information. Also, there are a button to save Pokémon data to the database.

4. Saving Pokémon to the Database:

   To save a Pokémon's data to the database, there are two options:

   1. At Home Page locate the "Save to DB" button in Pokémon List table and click on it, this will save only the name of the Pokémon.

   2. Open the modal for the desired Pokémon by clicking on its card.
      Within the modal, locate the "Save to DB" button and click on it, this will save all data.

   The application will send the Pokémon's data to the backend, which will then save it to the connected database.

## Project Structure

The project is structured as follows:

- server/: Contains the Node.js Express backend application.
- app/: Contains the React frontend application.
- docker-compose.yml: Defines the services and configuration for Docker Compose.
- Makefile: Provides commands for automation and simplification of tasks.

## Contributing

We welcome contributions from the community. To contribute to the project, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork.
- Create a pull request to the main repository's `master` branch.

## Contact

If you have any questions, suggestions, or need assistance, please feel free to contact us:

- Project Maintainer: Hector Rubi
- Email: hector.rubi.garcia@outlook.com

## License

Released under [MIT](/LICENSE) by [@Hector Rubi](https://github.com/HectorRubi).
