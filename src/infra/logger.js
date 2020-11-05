const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.json(), winston.format.timestamp()),
    transports: []
});

logger.add(new winston.transports.Console({
    format: winston.format.json()
}));


module.exports = logger;