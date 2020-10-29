const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const Messages = require('../../utils/Messages') 

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({message: Messages.notAuthorizationHeader})
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        req.userID = decoded.id;
        return next();
    }catch(err) {
        return res.status(401).json({message: Messages.invalidToken});
    }

}