const http = require("http")
const port = 8080;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/sobre': 'info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})
server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})