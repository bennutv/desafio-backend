const jwt = require('jsonwebtoken');
const jwtConfig = require ('../config/jwt');

module.exports = ( req, res, next ) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided'});
    }

    const parts = authHeader.split(' ');

    if (!parts.legth == 2) {
        return res.status(401).send({ error: 'Token Error'});
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatted'});
    }
    const configJwt = jwtConfig.default.secret;
    jwt.verify(token, configJwt, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalid'});

        req.userId = decoded.id;

        return next();
    });

}