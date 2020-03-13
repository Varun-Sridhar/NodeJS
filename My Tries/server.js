const fs = require('fs');

const requestHandler = ((req, res) =>
{
    const url = req.url;
    const method = req.method;
    if(url==='/')
    {
        res.write('<html>');
        res.write('<body><head><title>Empty Url</title></head></body>');
        res.write('<h1>Welcome to Empty Url</h1>');
        res.write('</html>');
        return res.end();    
    }

    else if(url==='/account/login')
    {
        res.write('<html>');
        res.write('<body><head><title>Login</title></head></body>');
        res.write('<h1>Welcome to Login</h1>');
        res.write('</html>');
        return res.end();    
    }

    else if(url==='/message' && method==='POST')
    {
        //req.on('data', (chunk)=>);
        fs.writeFileSync('message.txt', 'DUMMY');
        res.setHeader('Location', '/');
        return res.end();
    }
});
    
    //console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><head><title>My First page</title></head></body>');
    res.write('<h1>Welcome to Node App!!</h1>');
    res.write('</html>');
    res.end();
    //process.exit();

//module.exports = requestHandler;

module.exports = {
    handlerKey : requestHandler,
    textKey : 'Hello from Exports!'
};
    