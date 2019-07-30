
const winston = require('winston');
const winstonDailyRotate = require('winston-daily-rotate-file');
//Custom logger
const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    transports : [
        new winstonDailyRotate({
            filename : './logs/common-%DATE%.log',
            datePattern : 'YYYY-MM-DD',
            maxFiles: '7d',
            maxSize : '20m'
        }),
        new winstonDailyRotate({
            filename : './logs/error-%DATE%.log',
            datePattern : 'YYYY-MM-DD',
            maxFiles: '7d',
            maxSize : '20m',
            level : 'error'
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            timestamp: true
        })
        //new winston.transports.File({filename:'./logs/error.log',level:'error'}),
        //new winston.transports.File({filename:'./logs/combined.log'})
    ]
})
module.exports = logger;