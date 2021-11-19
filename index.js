const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
	console.log('Listening on port 3000');
});

const pagesDir = __dirname + '/pages/';

app.get(['/', '/index'], (req, res) => {
	res.sendFile(path.resolve(pagesDir, 'index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.resolve(pagesDir, 'about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.resolve(pagesDir, 'contact.html'));
});