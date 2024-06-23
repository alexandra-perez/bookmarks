// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// Connect the controller
const bookmarksController = require('./controllers/bookmarksController.js');
app.use('/bookmarks', bookmarksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// 404 PAGE
app.get("*", (req, res) => {
    //  res.json({ error: 'Page not found' });
    res.status(404).json({ error: "Page not found" })
});


// EXPORT
module.exports = app;