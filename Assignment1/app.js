const http = require('http');

const server = http.createServer((req,res)=>
{
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        res.write('<html>');
        res.write('<head><title>Enter Username</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    else if (url === '/users')
    {
        res.write('<html>');
        res.write('<head>Dummy Users</head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Varun Sridhar </li>');
        res.write('<li> Dilip Subbaian G </li>');
        res.write('<li> Venkata Prithvi Krishna Palle </li>');
        res.write('</ul');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
 
    if (url === '/create-user' && method === 'POST')
    {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

});


server.listen(3000);