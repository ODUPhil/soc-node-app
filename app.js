const express = require("express");
const fs = require("fs");
const app = express(); // creating an instance of express, which is a web application framework for Node.js that simplifies the process of building web servers and APIs.
const PORT = 3000; // defining the port number      

// start of Logging system
function logevent(event, data = {}) {

    if (process.env.NODE_ENV === "test") {
        return; // skip logging during tests to avoid cluttering the log file with test events
    }

    const logEntry = {
        timestamp: new Date().toISOString(),
        event,
        data
    };     // create a log entry object with a timestamp, event name, and additional data

    fs.appendFileSync("log.txt", JSON.stringify(logEntry) + "\n"); // append the log entry to a file named "log.txt"
    console.log(logEntry); // also log to console for real-time monitoring
}
// end of Logging system
                                                
app.get("/", (req, res) => { // defining a route for the root URL
    logevent("Home page accessed"); // log the event of accessing the home page
    res.send("SOC Node App Running"); // send a response to the client
});

app.get("/login", (req, res) => { // defining a route for the login URL
    const username = req.query.username || "unknown"; // get the username from the query parameters

    logevent("login_attempt", { // log the event of a login attempt with additional data
        username, 
        ip: req.ip,
        endpoint: req.originalUrl
    });

   logevent("Login attempt", { user: username, ip: req.ip }); // log the event of a login attempt with the username and IP address
    res.send(`Welcome, ${username}!`); // send a response to the client
});



app.get("/data", (req, res) => { // defining a route for the data URL
    logevent("Data endpoint accessed"); // log the event of accessing the data endpoint
    res.json({ status: "ok", data: "sample payload" }); // send a JSON response to the client
});

if (require.main === module) { // check if the script is being run directly
    app.listen(PORT, () => { // start the server and listen on the defined port
        logevent(`Server started on port ${PORT}`); // log the event of the server starting
        console.log(`Server is running on http://localhost:${PORT}`); // print a message to the console
    });
}

module.exports = app; // export the app for testing purposes

// created a backend webserver using express that listens on port 3000 and has three routes: "/", "/login", and "/data". Each route logs specific events to a log file and sends appropriate responses to the client.   
// This is important for SOC operations as it allows for monitoring and logging of user activities and system events, which can be crucial for security analysis and incident response.
// I also learned how on the backend we can log events to a file and the console, which is essential for tracking user interactions and system behavior in a SOC environment.

