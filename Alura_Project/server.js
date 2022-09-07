import app from '/Users/viniciussalgueiro/Documents/studing_Node/Alura_Project/src/app.js'

const port = process.env.process || 8002;



app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})