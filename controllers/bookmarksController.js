const express = require('express');
// setting bookmarks as the base route
const bookmarks = express.Router();
const bookmarksArray = require('../models/bookmark.js');

bookmarks.get('/', (req, res) => {
  res.json(bookmarksArray);
});

module.exports = bookmarks;
