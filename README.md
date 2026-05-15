# SOC Node App — Technical Documentation
Project Overview

The SOC Node App project is a backend-focused learning and portfolio project designed to combine:

  - Backend development
  - SOC-style telemetry logging
  - CI/CD automation
  - Automated testing
  - Docker containerization

The purpose of the project is to simulate the early stages of a modern backend infrastructure environment while exposing foundational DevOps and security engineering concepts.

The project was built using Node.js and Express, then expanded into a CI/CD-enabled workflow using GitHub Actions and Docker.


# Objectives
  - Learn backend server architecture
  - Understand HTTP request handling
  - Implement structured app logging
  - learn git and github workflow
  - build automated CL pipelines
  - Add automated api testing
  - Containerized apps using docker

Technologies Used

Node.js	JavaScript: runtime for backend execution
Express:	Backend web framework
Git:	Version control system
GitHub:	Remote repository hosting
GitHub Actions:	CI/CD automation platform
Jest:	Automated testing framework
Supertest	HTTP endpoint testing
Docker:	Application containerization


# Node.Js for backend
  - Backend is written with Node.js
  - Node.js allows JS to execute outside the browser, web server creation or API developemnt
  - Utilized the express framework to simplify the backend routing and HTTP handling

# Express Setup
 Initializes an express server:
    const express = require("express");
    const app = express();
Server listens on port 3000:
    const port = 3000;
The backend becomes accessible through:
  http://localhost:3000


Application Routes
Root route ( / ) 
  Root endpoint validates the backend is operational:
    GET / 
  Response:
    SOC Node App Running
    
Login Route ( /login)
  Login route for user authentitcation telemetry:
    Get /login?username=(username)
  Example request:
    http://localhost:3000/login?username=(username)
  Functionallity of Login:
    - Grab username data, log authentitcation, capture source IP

Data Route ( /data)
  This endpoint demostrates JSON API responses:
    - GET /data

# Structured Logging System
  Every request is logged with structured data:

- timestamp
- event type
- IP address
- endpoint
- user-agent

This simulates what Security Operations Centers (SOC) analyze in real systems.

Example log:

```json
{
  "timestamp": "2026-05-15T11:00:00.000Z",
  "event": "login_attempt",
  "data": {
    "ip": "172.17.0.1",
    "endpoint": "/login",
    "userAgent": "Mozilla/5.0..."
  }
}
```

# Automated Testing

Used Jest which is a JS testing framework it is responsible for running the test and checking results.

Used Supertest, which simulates sending HTTP requests to the Express app, simulates users hitting endpoints and returns responses

# Docker

Docker is used to containerize the application, packaging the Node.js backend and its dependencies into a portable environment.

This ensures the application runs consistently across different systems without requiring manual setup.

In this project, Docker simulates a production-like backend service where the API runs inside an isolated container.

# GitHub actions

Github actions is being used to simulate CI/CD pipeline, being able to update the code and instantly push that out to the main branch for use is essential for teams in real world environments, everytime i push it out the workflow will be triggered by following the yml script in .github/workflows and builds a docker image. To improve it i can have this pushed to dockerhub or github container registry to better represent the CD of the pipeline. 

