const http=require('http');
const app=require('./backend/app');
const server = http.createServer(app);

const port = process.env.port || 3000;
// app.set is used for setting the configuration
app.set('port',port);
// below code is used when we are not using express js
/* const server = http.createServer((req,res) => {
res.end('This is my first program');
}); */


server.listen(port);


