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

Structured Logging System
  Logging system to simulate SOC-style application telemetry:
    Logging functions logs: Login attempts, endpoint acesss, source IP, timestamps.
  Upgraded to structured JSON:
    Upgraded to JSON because it is commonly used in SIEM platforms and SOC telemetry ingestion.
  
    
