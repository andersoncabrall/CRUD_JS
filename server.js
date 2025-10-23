import express from 'express'
import {v4 as uuidv4} from 'uuid'; //essa  biblioteca eh massa, ela gera um id unico e universal, ela eh massa

const app = express()
app.use(express.json()) // pra usar json, pq por padrao nao funciona json nessa merda

const users = []

app.get('/', (req, res) => {

    res.send(JSON.stringify(users))
    res.status(200) //200 eh que deu tudo certo  
})

app.post('/', (req, res) => {

    const id = uuidv4()
    const user = {id: id, ...req.body}

    users.push(user)
    res.send(user)

    res.status(201) //201 eh que deu tudo certo e eu criei oq voce pediu pra eu criar 
})

//isso eh um route params, pra fzr alguma coisa com algo especifico
app.put('/:id', (req, res) => { //os : serve pra dizer que vc cvai receber um valor dinamico, e vai cria uma variavel chamada id e vc vai ter acesso a ela
    const {id} = req.params
    const {nome, idade} = req.body

    const userUpdate = {id, nome, idade}
    const index = users.findIndex(user => user.id == id)

    if (index < 0){
        return res.status(404).json({message: "Usuario nao encontrado"})
    }

    users[index] = userUpdate

    return res.json(userUpdate)
})

app.delete('/:id', req, res => {
    const {id} = req.params

    const index = users.findIndex(user => user.id == id)

    if (index < 0){
        return res.status(404).json({message: "Usuario nao encontrado"})
    }

    users.slice(index, 1)

    return res.status(204).json({message: "Usuario deletado"})
})

app.listen(3003, () => {
    console.log('rodando em http://localhost:3003')
})