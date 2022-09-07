import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id:1, 'titulo':'Senhor dos aneis'},
    {id:2, 'titulo':'O Hobbit'}

]

app.get('/', (req,res) => {
    res.status(200).send('curso de node') 
})

app.get('/livros', (req,res) => {
    res.status(200).json(livros)
})
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
