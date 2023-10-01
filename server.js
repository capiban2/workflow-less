const exp = require('express');
const app = exp();
const port = 3000;

const requestTime = (req,res,next)  =>{
	req.requestTime = Date.now();
	next();
}

app.get('/', requestTime, (req,res) =>{
	console.log('get request');
	console.log(`NEW ROW ADDED`);
	console.log(`another row added`);
	console.log(`Request time : ${req.requestTime}.`)
	res.send('hello world');
});

app.listen(port, () =>{
	console.log(`app is running on ${port} port.`);
});

