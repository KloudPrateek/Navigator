const express = require("express");
const app = express();
const { Navigator } = require("node-navigator");
const navigator = new Navigator();

// Function to retrieve and send GPS coordinates
const sendGPSData = () => {
    navigator.geolocation.getCurrentPosition((success, error) => {
        if (error) {
            console.error(error);
        } else {
            const longitude = success.longitude.toFixed(8);
            const latitude = success.latitude.toFixed(8);
            console.log(`Longitude: ${longitude}, Latitude: ${latitude}`);
        }
    });
};

// Set interval to execute sendGPSData every 2 seconds
const interval = setInterval(sendGPSData, 2000); // 2000 milliseconds = 2 seconds

// Route for testing the server
app.get("/", (req, res) => {
    res.send("Server is running. Check console for GPS coordinates.");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
