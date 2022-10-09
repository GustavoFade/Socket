const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const PORT = 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
// app.get('/', express.json(), (req,res)=> res.send("dslkdslkds"));
const server = app.listen(PORT, () => {
    console.log(`Running at port: ${PORT}`);
})

const io = socketIO(server);

io.on('connection', (socket)=>{
    // socket.emit("hi", {msg: "Mensagem enviada do back"}); //manda mensagem para o front
    // socket.on('hello',(data)=>{ //recebe mensagem do front
    //     console.log(data.msg)})

    // io.emit('hi', { msg: "enviando para todo mundo/ok" });//envia para todo mundo

    socket.broadcast.emit('hi', { msg: "envia para todo mundo menos para o socket da conexão"})
    
})