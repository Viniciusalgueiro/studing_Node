import express from "express";
import db from "/Users/viniciussalgueiro/Documents/studing_Node/Alura_Project/src/config/dbConnect.js"
import livros from "./models/Livro.js"
import routes from "./router/index.js"

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log('conexao com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app)

//const livros = [
//    {id:1, 'titulo':'Senhor dos aneis'},
//    {id:2, 'titulo':'O Hobbit'}]



app.get('/livros/:id', (req,res)=>{
    let index = buscalivro(req.params.id);
    res.json(livros[index]);
})

app.delete('/livros/:id', (req,res)=>{
    let {id} = req.params
    let index = buscalivro(id)
    livros.splice(index, 1)
    res.send(`livro ${id} removido com sucesso`)
})

app.post('/livros', (req,res) => {
    livros.push(req.body)
    res.status(201).send('livro foi cadastrado com sucesso')
})
app.put('/livros/:id', (req,res)=>{
    let index = buscalivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

function buscalivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app 
