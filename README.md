# Elevate-Lab-DevOps-Internship-
# CI/CD Pipeline for Node.js Web App - DevOps Internship

This project was completed as part of the **DevOps Internship by Elevate Labs**.

It demonstrates a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js web application. The pipeline automatically builds a Docker container for the app and pushes it to Docker Hub whenever changes are pushed to the `main` branch.

The web application itself is an interactive report on breast cancer diagnosis prediction, built with Node.js and Express.

## ✨ Features

-   **Interactive Web Report**: A single-page web application visualizing a data science project on breast cancer diagnosis.
-   **Node.js Backend**: A simple and efficient backend server built with Express.js to serve the web application.
-   **Containerization**: The application is containerized using Docker for consistent and reliable deployments.
-   **Automated CI/CD Pipeline**: A GitHub Actions workflow automates the entire process of testing, building, and deploying the application.

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js
-   **Frontend**: HTML5, CSS3, JavaScript
-   **Containerization**: Docker
-   **CI/CD**: GitHub Actions
-   **Container Registry**: Docker Hub

## 🚀 How to Run Locally

To run this application on your local machine, please follow these steps.

**Prerequisites:**
* [Node.js](https://nodejs.org/en/) installed (which includes npm)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

**Instructions:**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git)
    cd YOUR_REPOSITORY/interactive-report-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```

4.  **View the application:**
    Open your web browser and navigate to `http://localhost:3000`.

## ⚙️ CI/CD Pipeline Explained

The CI/CD pipeline is defined in the `.github/workflows/main.yml` file and is triggered on every push to the `main` branch.

The pipeline performs the following steps:

1.  **Checkout Code**: The workflow checks out the latest version of the repository's code.
2.  **Setup Node.js**: It sets up the specified Node.js environment.
3.  **Install Dependencies**: It runs `npm install` inside the `interactive-report-app` directory to install all required packages.
4.  **Login to Docker Hub**: It securely logs into Docker Hub using credentials stored in GitHub Secrets (`DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN`).
5.  **Build and Push Docker Image**: It builds a Docker image of the application using the `Dockerfile` and pushes the newly created image to Docker Hub, tagging it as `latest`.
