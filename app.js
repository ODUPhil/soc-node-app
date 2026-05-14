const express = require("express");
const fs = require("fs");
const app = express(); // creating an instance of express, which is a web application framework for Node.js that simplifies the process of building web servers and APIs.
const PORT = 3000; // defining the port number      

// start of Logging system
function logevent(event, data = {}) { // function to log events with an optional data parameter
    const logEntry = {
        timestamp: new Date().toISOString(), // get current timestamp
        event: event, // the event being logged
        data: data // any additional data related to the event
    };
    console.log(JSON.stringify(logEntry, null, 2)); // print log entry to console in a readable format
    const fs = require("fs"); // require the file system module to write logs to a file
    fs.appendFileSync("log.txt", JSON.stringify(logEntry) + "\n"); // append log entry to a file called log.txt

    const timestamp = new Date().toISOString(); // get current timestamp 
    const log = `${timestamp} - ${event}\n`; // create log message 

    console.log(log); // print log message to console
    fs.appendFileSync("log.txt", log); // append log message to file
}
// end of Logging system
                                                
app.get("/", (req, res) => { // defining a route for the root URL
    logevent("Home page accessed"); // log the event of accessing the home page
    res.send("SOC Node App Running"); // send a response to the client
});

app.get("/login", (req, res) => { // defining a route for the login URL
    const username = req.query.username || "unknown"; // get the username from the query parameters

    logevent("login_attempt", { // log the event of a login attempt with additional data
        username: username,
        ip: req.ip,
        endpoint: req.originalUrl
    });

   logevent("Login attempt", { user: username, ip: req.ip }); // log the event of a login attempt with the username and IP address
    res.send(`Login attempt for user: ${username}`); // send a response to the client
});



app.get("/data", (req, res) => { // defining a route for the data URL
    logevent("Data endpoint accessed"); // log the event of accessing the data endpoint
    res.json({ status: "ok", data: "sample payload" }); // send a JSON response to the client
});

app.listen(PORT, () => { // start the server and listen on the defined port
    logevent(`Server started on port ${PORT}`); // log the event of the server starting
    console.log(`Server is running on http://localhost:${PORT}`); // print a message to the console
});

// created a backend webserver using express that listens on port 3000 and has three routes: "/", "/login", and "/data". Each route logs specific events to a log file and sends appropriate responses to the client.   
// This is important for SOC operations as it allows for monitoring and logging of user activities and system events, which can be crucial for security analysis and incident response.
// I also learned how on the backend we can log events to a file and the console, which is essential for tracking user interactions and system behavior in a SOC environment.