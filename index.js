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
		file: 'index'
	},
	{
		path: '/about',
		file: 'about'
	},
	{
		path: '/contact',
		file: 'contact'
	},
	{
		path: '/post',
		file: 'post'
	}
];

for (let route of routes) {
	app.get(route.path, (req, res) => {
		res.render(route.file);
	});
}
