require("dotenv-safe").config();
var express = require('express');
var router = express.Router();
var md5 = require('md5');
var authentication = require('../utils/authentication');
var jwt = require('jsonwebtoken');

//Mock User
const user = require("../static/data/users");

router.post('/login', (req, res) => {
  // Valida se ousuário é válido
  if( user.login == req.body.user && user.pwd == md5(req.body.pwd)){ 

    // Pega Id do usuário
    const userId = user.id;

    // Cria Token
    const token = jwt.sign({ userId }, process.env.SECRET, {
        expiresIn: "1 hour" // expires in 1 hour
    });

    // Retorna token
    res.send({ auth: true, token: token });

  }else{ // Retorna falso, id inválido
      res.send({
          auth: false,
          message: 'Login inválido!'
      });
  }
});  

router.get('/logout', authentication.verifyJWT, function(req, res) {
    res.status(200).send({ 
      auth: false, 
      token: null 
    });
});

module.exports = router;