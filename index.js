const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

	/* // weird bug that caused a link to have a trailing
		// slash appended to it..
	if (req.url.endsWith("/") && req.url.length > 1) {
		console.log("Trailing slash found... trimming")
		req.url = req.url.slice(0, -1);
		res.writeHead(302, {
			'Location': req.url
		});
		res.end();
		return;
	}*/

	const pages = [{
			url: ['/', '/index'],
			file: fs.readFileSync('./pages/index.html')
		},
		{
			url: '/about',
			file: fs.readFileSync('./pages/about.html')
		},
		{
			url: '/contact',
			file: fs.readFileSync('./pages/contact.html')
		},
		{
			url: '*',
			file: fs.readFileSync('./pages/not-found.html')
		}
	];
	let currentPage = pages.find((p) => {
		if (Array.isArray(p.url)) {
			let url = p.url.find((u) => u === req.url)
			return url !== undefined
		} else {
			return p.url === req.url
		}
	});
	console.log(req.url);
	console.log(currentPage);
	if (currentPage !== undefined) {
		res.end(currentPage.file);
	} else {
		res.writeHead(404);
		res.end(pages.find((p)=>p.url === '*').file);
	}
});
server.listen(3000);