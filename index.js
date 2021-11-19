const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, () => {
	console.log('Listening on port 4000');
});

const pagesDir = __dirname + '/pages/';

const routes = [
	{
		path: '/',
		file: 'index.html'
	},
	{
		path: '/about',
		file: 'about.html'
	},
	{
		path: '/contact',
		file: 'contact.html'
	},
	{
		path: '/post',
		file: 'post.html'
	}
];

for (let route of routes) {
	app.get(route.path, (req, res) => {
		res.sendFile(path.resolve(pagesDir, route.file));
	});
}
