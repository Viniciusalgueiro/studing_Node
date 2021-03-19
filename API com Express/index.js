const customExpress = require('./config/CustomExpress')

const app = customExpress()
app.listen(8080, ()=> console.log('servidor rodando na porta 3001'));

