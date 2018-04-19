const http = require('http')

http.createServer( (req, res) => {
    res.write('Hello Wold')
    res.end()
}).listen(3000)