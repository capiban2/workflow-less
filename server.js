const exp = require('express');
const app = exp();
const port = 3000;

app.get('/', () =>{
	console.log('get request');
	console.log(`NEW ROW ADDED`);
	res.send('hello world');
});

app.listen(port, () =>{
	console.log(`app is running on ${port} port.`);
});

