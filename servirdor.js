

const express = require('express');
const bodyParser = require('body-parser');
const { loginUser } = require('./autenticador'); 
const path = require('path');

const app = express();
app.use(bodyParser.json()); 

app.use(express.static(__dirname));


app.post('/api/auth/login', loginUser); 


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); 
});


app.get('/perfil/talento', (req, res) => {
    res.sendFile(path.join(__dirname, 'perfil.html')); 
});


const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`¡Servidor corriendo exitosamente en http://localhost:${PORT}/`);

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html')); 
});
