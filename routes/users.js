require("dotenv-safe").config();
const express = require('express');
const router = express.Router();
const md5 = require('md5');
const authentication = require('../utils/authentication');
const jwt = require('jsonwebtoken');

//Mock User
const user = require("../static/data/users");

router.post('/login', (req, res) => {
  // Valida se ousuário é válido
  let validLogin = user.login == req.body.user;
  let validPwd = user.pwd == md5(req.body.pwd);
  if( validLogin && validPwd ){ 

    // Pega Id do usuário
    let userId = user.id;

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
    res.send({ 
      auth: false, 
      token: null 
    });
});

module.exports = router;