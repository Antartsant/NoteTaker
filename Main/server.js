const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const port = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));