const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello even more stupid stolen project 2nd commit!')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
