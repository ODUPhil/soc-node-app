SOC Node App — Technical Documentation
Project Overview

The SOC Node App project is a backend-focused learning and portfolio project designed to combine:

  - Backend development
  - SOC-style telemetry logging
  - CI/CD automation
  - Automated testing
  - Docker containerization

The purpose of the project is to simulate the early stages of a modern backend infrastructure environment while exposing foundational DevOps and security engineering concepts.

The project was built using Node.js and Express, then expanded into a CI/CD-enabled workflow using GitHub Actions and Docker.

Objectives
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


Node.Js for backend
  - Backend is written with Node.js
  - Node.js allows JS to execute outside the browser, web server creation or API developemnt
  - Utilized the express framework to simplify the backend routing and HTTP handling

Express Setup
 Initializes an express server:
    const express = require("express");
    const app = express();
Server listens on port 3000:
    const port = 3000;
The backend becomes accessible through:
  http://localhost:3000


Application Routes
