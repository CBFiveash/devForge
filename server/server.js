require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/dbConfig");
const Challenge = require("./src/api/models/ChallengeModel");

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

// Import routes
const challengeRoutes = require("./src/api/routes/challengeRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/challenges", challengeRoutes);

// Test the connection to ensure everything is working
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database models synced!");
    console.log("Initializing server...");
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
