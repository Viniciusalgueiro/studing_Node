module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Servidor rodando, tudo ok, você está realizando um GET'))

    app.post('/atendimento', (req, res) => res.send('voce esta realizando um POST'))
}