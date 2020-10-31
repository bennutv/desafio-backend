const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const Messages = require('../../utils/Messages'); 
const { AuthUtils } = require('../controllers/Authentication/AuthUtils');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({message: Messages.notAuthorizationHeader})
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        req.userID = decoded.userID;
        req.token = token;
        let _validTokens = await AuthUtils.loadListValidToken();
        let index = _validTokens.findIndex(e => e.userID === req.userID && e.token === token);
        if(index > -1) {
            return next();
        }else {
            return res.status(401).json({message: Messages.invalidToken});
        }   
    }catch(err) {
        return res.status(401).json({message: Messages.invalidToken});
    }

}