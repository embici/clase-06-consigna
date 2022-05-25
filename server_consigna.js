const express = require('express');
const Contenedor = require('./contenedor_promises')
const container = new Contenedor('productos.txt')

const app = express();

const PORT = process.env.PORT || 8080;

let data = [{id: '4', title:'laptop', thumbnail:'https://localhost:8080/00.jpg', price: 123.45},
            {id: '5', title:'lapicero', thumbnail:'https://localhost:8080/00.jpg', price: 123.45},
            {id: '6', title:'impresora', thumbnail:'https://localhost:8080/00.jpg', price: 123.45},
            {id: '7', title:'escritorio', thumbnail:'https://localhost:8080/00.jpg', price: 123.45},
            {id: '8', title:'monitor', thumbnail:'https://localhost:8080/00.jpg', price: 123.45},
            {id: '9', title:'celular', thumbnail:'https://localhost:8080/00.jpg', price: 123.45}]

const server = app.listen(PORT, () => {
    console.log(`Server http on ${PORT}`)
})

server.on('error', err => console.log('Error on server', err))

app.get('/productos', (req, res) => {
    res.send(data)  
})

app.get('/productRandom', (req, res) => {
    res.send(data[Math.floor(Math.random() * data.length)])  
})
container.read().then(result => {
        data = [ ...JSON.parse(result), ...data]
        console.log('data', data)
    }
);

